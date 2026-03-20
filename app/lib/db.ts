import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "localhost",
    user: "root",
    database: "tutoroo_db"
})

export const prisma =  new PrismaClient({adapter})