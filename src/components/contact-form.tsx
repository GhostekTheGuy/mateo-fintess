"use client";

import { useActionState, useEffect } from "react";
import { ChevronRight, CheckCircle, Loader2 } from "lucide-react";
import { submitConsultation } from "@/app/actions/consultation";

type FormState = { error?: string; success?: boolean };

const initialState: FormState = {};

async function formAction(_prev: FormState, formData: FormData): Promise<FormState> {
  return submitConsultation(formData);
}

export function ContactForm() {
  const [state, action, pending] = useActionState(formAction, initialState);

  useEffect(() => {
    if (state.success && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Dziękuję!</h3>
        <p className="text-muted text-lg">
          Odezwę się w ciągu 24h, żeby umówić konsultację telefoniczną.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider">
            Imię i nazwisko
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Jan Kowalski"
            className="w-full bg-surface border border-white/10 rounded px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-2 uppercase tracking-wider">
            Numer telefonu
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+48 ..."
            className="w-full bg-surface border border-white/10 rounded px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>
      </div>

      {state.error && (
        <p className="text-red-400 text-sm text-center">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="cta-pulse w-full bg-accent text-background font-bold text-lg py-4 rounded hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Wysyłanie...
          </>
        ) : (
          <>
            Zarezerwuj konsultację telefoniczną
            <ChevronRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-muted text-xs mt-4">
        Bez zobowiązań. Zero spamu. Odpisuję osobiście.
      </p>
    </form>
  );
}
