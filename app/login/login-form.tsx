"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="h-dvh flex items-center justify-center gap-2">
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-2"
      >
        <label htmlFor="email">email</label>
        <input className="border p-1" type="text" name="email" />
        <label htmlFor="password">password</label>
        <input className="border p-1" type="text" name="password" />
        {}
        <button type="submit" className=" col-span-2">
          Login
        </button>
      </form>
    </div>
  );
}
