import { Prisma } from "../app/generated/prisma/client";
import { prisma } from "./db";

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
}

export async function emailExists(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return { exist: !!user, data: user };
  } catch (error) {
    return {
      exist: false,
      data: null,
      error: error,
    };
  }
}

export async function createUser({
  name,
  email,
  password,
}: Prisma.UserCreateManyInput) {
  try {
    const user = await prisma.user.create({ data: { name, email, password } });
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error };
  }
}
