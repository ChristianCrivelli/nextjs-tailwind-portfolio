// Single source of truth for the "ready to work" date. Update this one value
// if the timeline changes — badge copy and styling are both derived from it
// so they can't drift out of sync (see issue #18).
export const AVAILABLE_FROM = '2027-06-01';

export type AvailabilityTier = 'far' | 'close' | 'now';

export interface AvailabilityBadge {
  tier: AvailabilityTier;
  label: string;
  className: string;
}

/**
 * Maps months-until-`AVAILABLE_FROM` to a copy/style tier:
 *  - far out   (> 6 months):  calm, static styling
 *  - getting closer (1–6 months): more prominent styling + a countdown
 *  - very close / passed (< 1 month): "Available now"
 */
export function getAvailabilityBadge(now: Date = new Date()): AvailabilityBadge {
  const target = new Date(AVAILABLE_FROM);
  const msPerMonth = (1000 * 60 * 60 * 24 * 365.25) / 12;
  const monthsUntil = (target.getTime() - now.getTime()) / msPerMonth;

  if (monthsUntil <= 1) {
    return {
      tier: 'now',
      label: 'Available now',
      className: 'bg-green-600 text-white dark:bg-green-500 dark:text-neutral-950',
    };
  }

  if (monthsUntil <= 6) {
    const months = Math.ceil(monthsUntil);
    return {
      tier: 'close',
      label: `Ready to work in ~${months} month${months === 1 ? '' : 's'}`,
      className:
        'bg-amber-100 text-amber-900 font-semibold ring-1 ring-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-800',
    };
  }

  return {
    tier: 'far',
    label: 'Ready to work starting Summer 2027',
    className: 'bg-green-100 text-green-800 dark:bg-emerald-950/40 dark:text-emerald-300',
  };
}
