"use server";

import { createClient } from "@/utils/supabase/server";

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

  return { success: true };
}
