"use server";

import bcrypt from "bcryptjs";
import z from "zod";
import { createUser, emailExists } from "../../lib/helpers";

const Schema = z.object({
  name: z.string().min(2, "Name must be atleas 2 characters"),
  email: z.email("Invalid Email"),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export type RegisterState = { error?: string; success?: string };

export async function registerAction(_prev: RegisterState, formData: FormData) {
  const parsed = Schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) return { error: parsed.error.issues[0].message };

  const { name, email, password } = parsed.data;

  if ((await emailExists(email)).exist)
    return { error: "Email already in use." };

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    await createUser({ name, email, password: hashedPassword });
  } catch (e) {
    return { error: "An error occurred while creating the account." };
  }

  return { success: "Account created! Redirecting to login…" };
}
