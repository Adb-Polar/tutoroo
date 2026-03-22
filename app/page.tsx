import { prisma } from "../lib/db";
import Counter from "./components/client";
import Link from "next/link";

const routes = [
  { name: "login", path: "/login" },
  { name: "register", path: "/register" },
];

async function checkDb() {
  try {
    // Attempt to connect and run a simple query
    await prisma.$connect();
    await prisma.$queryRaw`SELECT 1`;

    console.log("✅ Database connected successfully");
    return { connected: true };
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return {
      connected: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  } finally {
    // await prisma.$disconnect();
  }
}

export default async function Home() {
  let output = await checkDb();
  const message = output.connected;

  return (
    <div>
      this is a fucking page: the database is{" "}
      {message ? "connected" : "not connected"}
      {/* client component */}
      <nav>
        {routes.map((route) => (
          <Link key={route.name} href={route.path}>
            {route.name}
          </Link>
        ))}
      </nav>
      <Counter />
    </div>
  );
}
