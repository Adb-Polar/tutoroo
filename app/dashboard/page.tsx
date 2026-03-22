"use client";

import { SessionProvider, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <>
      This is a fucking dashboard
      <p>Logged in as: {session?.user.name}</p>
    </>
  );
}
