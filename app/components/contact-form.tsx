'use client';

import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
      company: String(data.get('company') ?? ''), // honeypot — real visitors leave this blank
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(result.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'sent') {
    return (
      <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
        Thanks — your message is on its way. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-3" noValidate>
      {/* Honeypot: hidden from sighted users and screen readers, but a form
          field bots will still fill in. tabIndex -1 keeps it out of the tab
          order for keyboard users. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          Name
        </label>
        <input id="name" name="name" type="text" required maxLength={200} className="form-field" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          Email
        </label>
        <input id="email" name="email" type="email" required maxLength={320} className="form-field" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          Message
        </label>
        <textarea id="message" name="message" required rows={4} maxLength={5000} className="form-field" />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-pill">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
