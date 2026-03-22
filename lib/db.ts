import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "tutoroo_db"
})

export const prisma =  new PrismaClient({adapter})