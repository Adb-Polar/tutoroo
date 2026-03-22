"use client";
import { useActionState, useEffect } from "react";
import { registerAction } from "../actions/register";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [state, action, pending] = useActionState(registerAction, {
    error: undefined,
    success: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      const time = setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  });

  return (
    <div className="h-dvh flex items-center justify-center gap-2">
      <form
        action={action}
        method="POST"
        onSubmit={() => {}}
        className="grid grid-cols-2 gap-2"
      >
        <label htmlFor="email">Email</label>
        <input className="border p-1" type="text" name="email" required/>
        <label htmlFor="email">Name</label>
        <input className="border p-1" type="text" name="name" required/>
        <label htmlFor="password">Password</label>
        <input className="border p-1" type="text" name="password" required/>
        {state.error && (
          <p className="col-span-2 text-red-500">{state.error}</p>
        )}
        {state.success && (
          <p className="col-span-2 text-green-500">{state.success}</p>
        )}
        <button type="submit" className=" col-span-2">
          {pending ? "Creating Account…" : "Register"}
        </button>
      </form>
    </div>
  );
}
