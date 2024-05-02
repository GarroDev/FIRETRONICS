## Welcome to FIRETRONICS E-Commerce!

## What motivated us to do this project?

Help people, develop new skill, and explore our creativity, are some things that motivated us to create this project.

## What is this project about?

This is a technology E-commerce web application. This web application was created with JavaScript, HTML, Bootstrap and JavaScript, storing products, customers information, and purchase records in SQL Server datatabase (RDBMS).

## Why use this project?

This is a good base to create your own E-commerce project about wathever you want, it's awesome, enjoy it! :shipit:

## What we learned?

New ways to create projects, and use different softwares to achieve a great goal.

## How can you start using this project?
|Order|Detail|
|-----|-----:|
|1|[Download Visual Sudio Code](https://code.visualstudio.com/).|
|2|[Download Node.js](https://nodejs.org/en).|
|3|[Download SQL Server (We recommend SQL Server developer edition.)](https://go.microsoft.com/fwlink/p/?linkid=2215158&clcid=0x240a&culture=es-co&country=co).|
|4|Dowload GitHub FIRETRONICS FILES!|
|5|Use FIRETRONICS.sql from "Database" file to create the SQL Server database :feelsgood:|
|6|Installation, configuration and deployment of XAMPP applications.|
|7|Installation, configuration and deployment of MySQL database engine|

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

## Configurations for the correct functioning of the products section


### 1. Configure Xampp

**1.	Application installation**

Since the project has a section developed in PHP, it is necessary to run the Apache web server services on a specific port, so for this development XAMPP was implemented.

|[Download XAMPP ](https://www.apachefriends.org/es/download.html).|

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/115ed3f3-af85-4fe8-b7f5-0f46e7b846c1)


**2.	Route configuration**
   
Once XAMPP is installed in its default configuration, we proceed to run and configure the application in its Apache server section:

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/929745f7-896c-4cf5-966d-0a62077ff4ec)

Select the "Apache (httpd.conf)" option from the drop-down list

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/13e18270-546a-4f86-a58d-68bb022acce5)

Find the “'Main' Server Configuration” section and then go to the “#DocumentRoot” sector to add the following path:

#DocumentRoot "C:/xampp/htdocs"  
#<Directory "C:/xampp/htdocs">  
Document root "C:/FIRETRONICS/HTML"  
<Directory "C:/FIRETRONICS/HTML">  

**Example image**

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/957d2a6c-d20a-4ec4-982d-438138cf1f17)


**3.	Preparation of work spaces**
   
You need to save and close the file, and then add the main project folder called “FIRETRONICS” to the root of the C: drive.

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/11fffc0f-9316-466c-8d57-f1ee69ba7d91)

**4.	Run server**
   
Finally, run the Apache service and verify that it is running on the default ports 80, 443:

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/f97ff393-ff50-4641-87f7-48e4c034e48b)  

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/6a9ad9e2-2b0a-4bc2-b79a-dafd72e90610)

### Configure MySQL

**1.	Install application**
   
Using a secondary database engine, it was implemented for mysql for proper integration of PHP functions and queries. Therefore MySQL must be installed with its basic configuration, version 8.0.4 being recommended.

|[Download MySQL ](https://dev.mysql.com/downloads/mysql/).|

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/1302b12b-4d0d-4d22-8489-7e93fad304e4)


**2.	Configure the database**

And then configure the root user with the connection details and make a test connection.

Usuario: root  
Password: qwe1234  
Servidor: localhost  
Basededatos: carritodb  

![image](https://github.com/GarroDev/FIRETRONICS/assets/163207670/94e583bc-9b84-4a9f-a30f-fea22309fcef)

## Useful resoruces

- [Bootstrap](https://getbootstrap.com/).
- [NodeJs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs).
- [GitHub Desktop (In case that you are working with versions)](https://desktop.github.com/).
- [Readme emojis!](https://gist.github.com/rxaviers/7360908).

## Who work in this project?

- Cristian Garro Sabogal.
- Juan Pablo Jimenez Rodriguez.
- Mateo Londoño Echeverri.
- David Vallejo Grisales.









