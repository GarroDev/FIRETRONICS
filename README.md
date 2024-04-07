## Welcome to FIRETRONICS E-Commerce!

## What is this project about?

This is a technology E-commerce web application. This web application was created with JavaScript, HTML, Bootstrap and JavaScript, storing products, customers information, and purchase records in SQL Server datatabase (RDBMS).

## Why use this project?

This is a good base to create your own E-commerce project about wathever you want, it's awesome, enjoy it! :shipit:

## How can you start using this project?
|Order|Detail|
|-----|-----:|
|1|[Download Visual Sudio Code](https://code.visualstudio.com/).|
|2|[Download Node.js](https://nodejs.org/en).|
|3|[Download SQL Server (We recommend SQL Server developer edition.)](https://go.microsoft.com/fwlink/p/?linkid=2215158&clcid=0x240a&culture=es-co&country=co).|
|4|Dowload GitHub FIRETRONICS FILES!|
|5|Use FIRETRONICS.sql from "Database" file to create the SQL Server database :feelsgood:|

> [!WARNING]
> ¡BE CAREFUL! Developer edition it's only for DEV, QA, STG enviorments, no PRD.

## Start using step by step configuring SQL Server enviortment.

### Start in step 3.

Once you install de SQL Server instance let's configure it.

**1. Enable TCP/IP protocols for MSSQLServer**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/77ca341d-c3f2-4336-83da-130fab80e5ef)

**2. Restart the SQL Server instance.**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/252d04e5-64b3-4963-9215-48d90bc30c47)

**3. Install SQL Server Management Studio.**

[SSMS](https://aka.ms/ssmsfullsetup)

**4. Create the database.**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/99ec19ec-fa9a-4be3-b04f-ee58d1acceaa)

**Execute: CREATE DATABASE ECommerce_ENU_V1;**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/fc52112f-de38-448f-9dce-d7e2bdf30244)

**5. Create the database schema. (It's the FIRETRONICS.sql)**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/9bf22a34-1f65-449e-b459-699921923da8)

**6. Create login with sysadmin privileges to connect FIRETRONICS web with SQL Server database.**

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/a5830f16-e95e-4a0b-9783-80e758fd6c7b)

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/38499624-9142-48a0-a361-15fdf44c624a)

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/ef7ef0b5-9025-4164-947f-c47b2ebf8285)

**7. Configurate the sql server connection from Server.js.**

Use the login that u created before to configurate the conntection string:

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/25ce9540-ed61-47e6-b7e1-aa86e31af72f)

**8. Execute the next commands in the visual studio terminal.**

Like this:

![image](https://github.com/GarroDev/FIRETRONICS/assets/160985704/f8066e45-f1bf-4e18-8446-fbf1c3faa05e)

- npm install express
- npm install body-parser
- npm install mssql
- npm install bcrypt





