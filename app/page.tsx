import { prisma } from "./lib/db";

export default function Home() {
  let output = "xx";

  try {
    prisma.$connect();
    output = "connected";
  } catch (e) {
    output = "not connected " + e;
  } finally {
    prisma.$disconnect();
  }

  return <div>this is a fucking page: the database is {output}</div>;
}
