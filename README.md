## Getting Started
### Requirments
- pnpm 
>Install pnpm here: https://pnpm.io/11.x/installation
- nodejs
>Install nodejs here: https://nodejs.org/en/download

_im not sure if you can use npm with with this project since i used pnpm when c
reating this_
### STEP 1: Install dependencies
```bash 
pnpm install
```
### STEP 2: Create the Database
- Using mysql workbench or phphmyadmin create a database named `tutoroo_db`
```sql
CREATE DATABASE tutoroo_db;
```
> you dont need to create any table just the database

### STEP 3: Migrate using prisma
- open terminal and run
```bash
pnpm prisma migrate dev
```
> this will create tables based on the schema.prisma

### STEP 4: Genrate types from prisma
- open terminal and run

```bash
pnpm prisma generate
```
## How to -
### 1. How to run this project
```bash
pnpm run dev
```
Then open your browser then go to localhost:3000
***
### 2. How to view database
You can use prisma studio
```bash 
    pnpm prisma studio
```
Then ctrl + click the link. You can also use mysql workbench
***
### 3. How to update the database schema
- edit the prisma/schema.prisma
```bash
pnpm prisma migrate dev
```

