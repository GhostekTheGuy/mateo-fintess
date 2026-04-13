"use server";

import { createClient } from "@/utils/supabase/server";

const ZAPIER_WEBHOOK_URL =
  "https://hooks.zapier.com/hooks/catch/15102711/u7wwark/";

export async function submitConsultation(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  if (!name || !phone) {
    return { error: "Imię, nazwisko i numer telefonu są wymagane." };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("consultations").insert({
    name,
    phone,
  });

  if (error) {
    return { error: "Coś poszło nie tak. Spróbuj ponownie." };
  }

  // Send to Zapier webhook (fire-and-forget — don't block the user on this)
  const params = new URLSearchParams({ name, phone });
  fetch(ZAPIER_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  }).catch(() => {
    // Zapier failure is non-critical — lead is already saved in Supabase
  });

  return { success: true };
}
