GO
CREATE DATABASE [ECommerce_ENU_V1]
GO

USE [ECommerce_ENU_V1]
GO
/****** Object:  Table [dbo].[CATEGORIES]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORIES](
	[ID_Category] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CUSTOMERS]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CUSTOMERS](
	[ID_Customer] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OPTIONS]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OPTIONS](
	[ID_Option] [int] NOT NULL,
	[Name] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDER_DETAIL]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDER_DETAIL](
	[ID_OrderDetail] [int] NOT NULL,
	[ID_Order] [int] NOT NULL,
	[ID_Product] [int] NOT NULL,
	[Price] [numeric](18, 0) NOT NULL,
	[Amount] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDERS]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDERS](
	[ID_Order] [int] NOT NULL,
	[ID_Customer] [int] IDENTITY(1,1) NOT NULL,
	[Amount] [int] NOT NULL,
	[Customer_Address] [nvarchar](50) NOT NULL,
	[Order_Date] [date] NOT NULL,
	[Order_Status] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCT_CATEGORIES]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT_CATEGORIES](
	[ID_ProductCategory] [int] NOT NULL,
	[ID_Product] [int] NOT NULL,
	[ID_Category] [int] NOT NULL,
	[Detail] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCT_OPTIONS]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT_OPTIONS](
	[ID_ProductOption] [int] NOT NULL,
	[ID_Option] [int] NOT NULL,
	[ID_Product] [int] NOT NULL,
	[Detail] [nvarchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCTS]    Script Date: 4/10/2024 12:49:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCTS](
	[ID_Product] [int] NOT NULL,
	[Name] [nvarchar](200) NULL,
	[Price] [numeric](18, 0) NOT NULL,
	[Stock] [int] NOT NULL,
	[Description] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CUSTOMERS] ON 

INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (14, N'Jose', N'jose12@hotmail.com', N'$2b$10$88A5MlgN4.rKgdYJ2db7nu6w4iPocWqsUYU7wvGqnUgTK.dc1xPJq')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (16, N'Mateo', N'mateo@hotmail.com', N'$2b$10$ZukABcAOZwxaA2ucQgwco.QFBcDrmht25TUwwqTPDmAKymWUp5e6m')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (17, N'Jose', N'jose123@outlook.es', N'$2b$10$nFwYhjyfQHID2KztVdwHq.PNC9KFTCe9L7lAn7RYPDqSX71BDQICq')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (18, N'Jose', N'jose123@outlook.es', N'$2b$10$VkUcBuy.vM5JpKK4pYr2sOmVo7lJka5L3zKazeEXgKfrtDGTnoLwi')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (19, N'Jose', N'jose122223@outlook.es', N'$2b$10$vyUJPHRMIElIe/Hw0vtzBO4yIF0TdlkJNj/GTchwKzFCSSqSIYsV6')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (20, N'Jose', N'jose1222213@outlook.es', N'$2b$10$5IqXSNQSDnVF.qIMuWxgcO0RXHwkVvaOC2A9cl/N.JolUsg7kNn7O')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (21, N'Juan', N'JUna1@hotmail.com', N'$2b$10$5FoaPrPOjTicmg9sm7QGj.WIlBuNFon90UFpHu8t6K8CQZgDdNrLa')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (22, N'Juan', N'JUna12@hotmail.com', N'$2b$10$Qn5D4S6kb2LKvydzmozanOaYdTdM3zs9vN5Nf.SO79FdZXE6vB3UW')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (23, N'Cristian', N'cristiangarro20022@outlook.es', N'$2b$10$gkoCJAErNSjwkHbgj1L7SeaR6Rd/QeSE/HvHsSY7JX5asoKKu50zG')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (24, N'Ella', N'Ella123@outlook.es', N'$2b$10$gI3Il21o.cZQNN6RGH0Mqe.l.Gt.igQO7hA7x5Hi3aFGT8570Whhq')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (25, N'Ella', N'Ella1234@outlook.es', N'$2b$10$yWUI32jpFlqenKcoOTLzpeDEVSsrMT0iUBHeO4jfcPbO9ioJWvO8O')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (1017, N'Lunita', N'Lunita@hotmail.com', N'$2b$10$O0vOwNeGNI66F1KpqdAfeuSHk0qMtO9cTCSniwdyf6KzB6dOKRMDO')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (1018, N'Cristian Garro Sabogal', N'cristiangarroPoli@outlook.es', N'$2b$10$fyDfULowokRHUGipYBgGaeqymhg.mavKdMAvH3wBSmW7Hxk94VIlm')
INSERT [dbo].[CUSTOMERS] ([ID_Customer], [Name], [Email], [Password]) VALUES (15, N'Cristian', N'cristiangarro2002@outlook.es', N'$2b$10$3vGL6WfyqZiy8E8wW/s3tOTzOtqLcansBvUk7aRWPuywZMnhIuwW.')
SET IDENTITY_INSERT [dbo].[CUSTOMERS] OFF
GO
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (1, N'TODO EN UNO HP AMD RYZEN 5 5500U SSD 1TB RAM 8GB LED FHD 23.8"', CAST(2869000 AS Numeric(18, 0)), 0, N'COLOR: NEGROMARCA: HPMODELO: 205 G4 24 All-in-onePROCESADOR: AMD RYZEN 5 5500UCANTIDAD DE NUCLEOS: 6CANTIDAD DE UBPROCESOS: 12VELOCIDAD BASICA: 2.1GhzVELOCIDAD MAXIMA: HASTA 4.0GhzGRAFICOS: AMD Radeon™ GraphicsTIPO DE ALMACENAMIENTO DISCO 1: SSD 1TB M.2 NVME GEN3 PCI-EMEMORIA RAM: 8GB DDR4-3200MHZ.PANTALLA: LED 23.8" FULL HD (1920 X 1080)CAMARA WEB INTEGRADABLUETOOTHWIFIMOUSE Y TECLADOSISTEMA OPERATIVO: WINDOWS 11PUERTOS:4 PUERTOS USB1 HDMI1 RJ-45 ETHERNETSALIDA DE AUDIO')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (2, N'TODO EN UNO LENOVO INTEL CORE I3-1215U SSD 2TB RAM 40GB LED 24 FHD', CAST(2949900 AS Numeric(18, 0)), 0, N'COLOR: NEGROARCA: LENOVOMODELO: AIO 3 24IAP7PROCESADOR: INTEL CORE i3 1215UCANTIDAD DE NUCLEOS: 6CANTIDAD DE SUBPROCESOS: 8VELOCIDAD BASICA DEL PROCESADOR: 1,2GHZVELOCIDAD MAXIMA: 4,40GHZGRAFICOS: GRAFICOS UHD INTEL® PARA PROCESADORES INTEL® DE 12? GENERACIONTIPO DE ALMACENAMIENTO DE DISCO: SSD M.2 2TB NVME GEN3 PCI-ECAPACIDAD DE MEMORIA RAM: 40GB DDR4 3200MHZPANTALLA: LED 24" FULL HD (1920 X 080)BLUETOOTHWIFICAMARA WEB INTEGRADACOMBO DE MOUSE Y TECLADO DE ABLEPUERTOS:PUERTOS USB: 4HDMI: 1PUERTO RJ-45: 1NOTA: EL EQUIPO SE ENTREGA CON LOS PROGRAMAS BASICOS PARA ESTUDIO INSTALADO')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (3, N'TODO EN UNO HP INTEL CORE I5-1135G7 DISCO SSD 256GB RAM 16GB LED 21.5 FULL HD', CAST(2539900 AS Numeric(18, 0)), 0, N'MARCA: HPMODELO: 22-DF1518LAPROCESADOR: INTEL CORE i5N.° DE MODELO DEL PROCESADOR: 1135G7 DE 11.ª GENERACIONN.° DE NUCLEOS DE CPU: 4N.° DE SUBPROCESOS: 8RELOJ DE AUMENTO MAX: 4.20GHGRAFICOS INTEGRADOS: GRAFICOS INTEL® IRIS® XETIPO DE ALMACENAMIENTO DISCO 1: SSD 256 GB M.2 NVME GEN3 PCI-CAPACIDAD DE RAM: 16GB DDR4 3200MHZ.PANTALLA: 21.5 " FULL HD (1920 X 1080)CON MICROMARCO EN TRES LADOS, ANTIRREFLEJO, 250 NITSSISTEMA ERATIVO: WINDOWS 11 HOME PUERTOS:2 USB SuperSpeed TIPO A2 USB 2.0 TIPO ASALIDA HDMIAURICULARES/ MICROFONO COMBINADOIFI Y BLUETOOTH COMBINADOS, COMPATIBLE CON MU-MIMOCAMARA DE PRIVACIDAD HP TRUEVISION HD CON MATRIZ DE MICROFONO DIGITAL DOBLE INTEGRADANOTA EL EQUIPO INCLUYE PROGRAMAS BÁSICOS DE ESTUDIO INSTALADOS')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (4, N'Pc Computador Torre Gamer Intel Core I3 10100F Hdd 1Tb Ram 16Gb Gt710 2GB Mon22', CAST(2709000 AS Numeric(18, 0)), 0, N'PROCESADOR: INTEL CORE I3 10100F DECIMA GENERACIÓN.N.º DE NÚCLEOS DE CPU: 4 NÚCLEOS.N.º DE SUBPROCESOS 8.FRECUENCIA BASICA DEL PROCESADOR: 3,60 GHz.FRECUENCIA TURBO MAXIMA: 4,30 GHzTARJETA DE VIDEO NVIDIA GEFORCE GT-710 2GB MEMORIA RAM: 16 GB PC DDR4 BOARD PLACA : H410DISCO SOLIDO: HDD 1000 GBCAJA & CHASIS: CHASIS CON LATERAL DE VIDRIO (INCLUIYE 4 COOLER RGB)MONITOR 22 PULGADAS: FULL HDACCESORIOS: ARLANTES,TECLADO Y MOUSE GAMER USB.SISTEMA OPERATIO LINUX')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (5, N'TODO EN UNO LENOVO INTEL CORE I3-1215U SSD 1TB RAM 32GB LED 24 FHD', CAST(2609990 AS Numeric(18, 0)), 0, N'COLOR: NEGROMARCA: LENOVOMODELO: AIO 3 24IAP7PROCESADOR: INTEL CORE i3 1215UCANTIDAD DE NUCLEOS: 6CANTIDAD DE UBPROCESOS: 8VELOCIDAD BASICA DEL PROCESADOR: 1,2GHZVELOCIDAD MAXIMA: 4,40GHZGRAFICOS: GRAFICOS UHD INTEL® PARA PROCESADORES INTEL® DE 12? GENERACIONTIPO DE ALMACENAMIENTO DE DISCO: SSD M.2 1TB NVME GEN3 PCI-ECAPACIDAD DE MEMORIA RAM: 32GB DDR4 3200MHZPANTALLA: LED 24" FULL HD (1920 X 1080)BLUETOOTHWIFICAMARA WEB INTEGRADACOMBO DE MOUSE Y TECLADO DE ABLEPUERTOS:PUERTOS USB: HDMI: 1PUERTO RJ-45: 1')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (6, N'Pc Todo en Uno AIO HP 22-dd0014la AMD Athlon 3050U Ram 4gb SSD 256 + 1TB WinOrig', CAST(1459900 AS Numeric(18, 0)), 0, N'22-dd0014la \nProcesador: AMD Athlon™ 3050U SILVER velocidad base de 2,3 GHz\nMemoria RAM: 4GB  SDRAM DDR4-2400\nAlmacenamiento Hibrido\nAlmacenamiento en disco duro (HDD) de: 1 TB \nUnidad de estado sólido PCIe NVMe™ M.2 de: 256 GB \nGráficos: AMD Radeon \nPuertos : 2 USB SuperSpeed Type-A; 2 USB 2.0 Type-A 1 salida HDMI 1.4; 1 combinación de auriculares y micrófono; 1 RJ-45; wi-fi\nPantalla: Full HD de 21,5" en diagonal \nSistema Operativo: Windows 10 Home 64 ORIGINAL \nCombo mouse y teclado Inalámbrico HP 230 ')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (7, N'Computador Torre CPU Intel Dual Core Disco Mecánico 1Tb Ram Ddr4 8GB Monitor22', CAST(1389900 AS Numeric(18, 0)), 0, N'procesador: Intel Dual Core Cantidad de núcleos: 2Fuente de Poder 300WMemoria Ram: 8GB DDR4Disco Duro: HDD 1000 GBMonitor incluido: Monitor HD de 22 pulgadasAccesorios: Combo teclado y mouse usb')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (8, N'Pc Todo en Uno AIO HP 22-dd2006la Intel Celeron J4025 Ram 8gb DD 256 SSD Win 11', CAST(1799900 AS Numeric(18, 0)), 0, N'Marca del Procesador: INTEL Procesador: Intel Celeron Modelo del Procesador: Intel Celeron J4025 Memoria RAM: 8 GB Tipos de Discos que Incluye: Disco Estado Solido (SSD) Capacidad de Disco: Estado Solido SSD 256 GB Sistema Operativo: Windows 11Nucleos del Procesador: 2  NucleosVelocidad del Procesador: Frecuencia base de 2 GHz, hasta 2,9 GHz, 4 MB de caché L2, 2 núcleos y 2 subprocesosCaracteristicas Especiales: Cámara WEB IntegradaTamaño Pantalla: 21.5  PulgadasNo tiene Unidad de CD/DVD IntegradaPuertos HDMI: 1  PuertoPuertos LAN Ethernet: 1  PuertoPuertos USB: 2  PuertosPuertos SD: 1  PuertoSalidas de Audio: 1  Puerto')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (9, N'TODO EN UNO ASUS V222FAK INTEL I5-10210U - RAM 8GB - HDD 1TB - WIN10 - 21.5', CAST(2469900 AS Numeric(18, 0)), 0, N'Marca del Procesador: INTEL Procesador: Intel Celeron Modelo del Procesador: Intel Celeron J4025 Memoria RAM: 8 GB Tipos de Discos que Incluye: Disco Estado Solido (SSD) Capacidad de Disco: Estado Solido SSD 256 GB Sistema Operativo: Windows 11Nucleos del Procesador: 2  NucleosVelocidad del Procesador: Frecuencia base de 2 GHz, hasta 2,9 GHz, 4 MB de caché L2, 2 núcleos y 2 subprocesosCaracteristicas Especiales: Cámara WEB IntegradaTamaño Pantalla: 21.5  PulgadasNo tiene Unidad de CD/DVD IntegradaPuertos HDMI: 1  PuertoPuertos LAN Ethernet: 1  PuertoPuertos USB: 2  PuertosPuertos SD: 1  PuertoSalidas de Audio: 1  Puerto')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (10, N'Computador PC NUC Celeron J4025 Ram 4gb DD 64gb Acer IPS 22” Windows 11', CAST(1399900 AS Numeric(18, 0)), 0, N'Tipo PC: NUCProcesador: Intel Celeron J4025 2.0 GHZ + Cable ACMemoria: 4gb IntegradaAlmacenamiento: 64gb IntegradaSistema Operativo: Windows 11 HomeCombo: Logitech MK120 Alámbrico Monitor: ACER 21.5” SB222Q IPS - Reso')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (11, N'COMPUTADOR DE ESCRITORIO JANUS INTEL CORE I5 9400 SSD 480GB RAM 4GB MON 21.5 TYM', CAST(2399900 AS Numeric(18, 0)), 0, N'Procesador: Intel core i5 9400Velocidad: 4.0ghzFuente de Poder 300WMemoria Ram: 4GB DDR4Unidad de estado Solido: 480GBMonitor JANUS 21.5"Incluye Teclado y Mouse')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (12, N'COMPUTADOR DE ESCRITORIO JANUS INTEL CORE I5 9400 SSD 480GB RAM 4GB MON 21.5 TYM', CAST(2509900 AS Numeric(18, 0)), 0, N'Procesador: Intel core i5 9400Velocidad: 4.0ghzFuente de Poder 300WMemoria Ram: 8GB DDR4Unidad de estado Solido: 480GBMonitor 20 pulgadas LGIncluye Teclado y Mouse')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (13, N'TODO EN UNO LENOVO INTEL CORE I3-1215U SSD 1TB RAM 32GB LED 24 FHD', CAST(2609990 AS Numeric(18, 0)), 0, N'COLOR: NEGROMARCA: LENOVOMODELO: AIO 3 24IAP7PROCESADOR: INTEL CORE i3 1215UCANTIDAD DE NUCLEOS: 6CANTIDAD DE UBPROCESOS: 8VELOCIDAD BASICA DEL PROCESADOR: 1,2GHZVELOCIDAD MAXIMA: 4,40GHZGRAFICOS: GRAFICOS UHD INTEL® PARA PROCESADORES INTEL® DE 12? GENERACIONTIPO DE ALMACENAMIENTO DE DISCO: SSD M.2 1TB NVME GEN3 PCI-ECAPACIDAD DE MEMORIA RAM: 32GB DDR4 3200MHZPANTALLA: LED 24" FULL HD (1920 X 1080)BLUETOOTHWIFICAMARA WEB INTEGRADACOMBO DE MOUSE Y TECLADO DE ABLEPUERTOS:PUERTOS USB: HDMI: 1PUERTO RJ-45: 1')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (14, N'TODO EN UNO LENOVO INTEL CORE I3-1215U SSD 2TB RAM 40GB LED 24 FHD', CAST(2949900 AS Numeric(18, 0)), 0, N'COLOR: NEGROARCA: LENOVOMODELO: AIO 3 24IAP7PROCESADOR: INTEL CORE i3 1215UCANTIDAD DE NUCLEOS: 6CANTIDAD DE SUBPROCESOS: 8VELOCIDAD BASICA DEL PROCESADOR: 1,2GHZVELOCIDAD MAXIMA: 4,40GHZGRAFICOS: GRAFICOS UHD INTEL® PARA PROCESADORES INTEL® DE 12? GENERACIONTIPO DE ALMACENAMIENTO DE DISCO: SSD M.2 2TB NVME GEN3 PCI-ECAPACIDAD DE MEMORIA RAM: 40GB DDR4 3200MHZPANTALLA: LED 24" FULL HD (1920 X 080)BLUETOOTHWIFICAMARA WEB INTEGRADACOMBO DE MOUSE Y TECLADO DE ABLEPUERTOS:PUERTOS USB: 4HDMI: 1PUERTO RJ-45: 1NOTA: EL EQUIPO SE ENTREGA CON LOS PROGRAMAS BASICOS PARA ESTUDIO INSTALADO')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (15, N'TODO EN UNO HP AMD RYZEN 5 5500U SSD 1TB RAM 8GB LED FHD 23.8"', CAST(2869000 AS Numeric(18, 0)), 0, N'COLOR: NEGROMARCA: HPMODELO: 205 G4 24 All-in-onePROCESADOR: AMD RYZEN 5 5500UCANTIDAD DE NUCLEOS: 6CANTIDAD DE UBPROCESOS: 12VELOCIDAD BASICA: 2.1GhzVELOCIDAD MAXIMA: HASTA 4.0GhzGRAFICOS: AMD Radeon™ GraphicsTIPO DE ALMACENAMIENTO DISCO 1: SSD 1TB M.2 NVME GEN3 PCI-EMEMORIA RAM: 8GB DDR4-3200MHZ.PANTALLA: LED 23.8" FULL HD (1920 X 1080)CAMARA WEB INTEGRADABLUETOOTHWIFIMOUSE Y TECLADOSISTEMA OPERATIVO: WINDOWS 11PUERTOS:4 PUERTOS USB1 HDMI1 RJ-45 ETHERNETSALIDA DE AUDIO')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (16, N'Pc Todo en Uno AIO HP 22-dd0014la AMD Athlon 3050U Ram 4gb SSD 256 + 1TB WinOrig', CAST(1459900 AS Numeric(18, 0)), 0, N'22-dd0014la \nProcesador: AMD Athlon™ 3050U SILVER velocidad base de 2,3 GHz\nMemoria RAM: 4GB  SDRAM DDR4-2400\nAlmacenamiento Hibrido\nAlmacenamiento en disco duro (HDD) de: 1 TB \nUnidad de estado sólido PCIe NVMe™ M.2 de: 256 GB \nGráficos: AMD Radeon \nPuertos : 2 USB SuperSpeed Type-A; 2 USB 2.0 Type-A 1 salida HDMI 1.4; 1 combinación de auriculares y micrófono; 1 RJ-45; wi-fi\nPantalla: Full HD de 21,5" en diagonal \nSistema Operativo: Windows 10 Home 64 ORIGINAL \nCombo mouse y teclado Inalámbrico HP 230 ')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (17, N'Computador Torre CPU Intel Dual Core Disco Mecánico 1Tb Ram Ddr4 8GB Monitor22', CAST(1389900 AS Numeric(18, 0)), 0, N'procesador: Intel Dual Core Cantidad de núcleos: 2Fuente de Poder 300WMemoria Ram: 8GB DDR4Disco Duro: HDD 1000 GBMonitor incluido: Monitor HD de 22 pulgadasAccesorios: Combo teclado y mouse usb')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (18, N'Pc Todo en Uno AIO HP 22-dd2006la Intel Celeron J4025 Ram 8gb DD 256 SSD Win 11', CAST(1799900 AS Numeric(18, 0)), 0, N'Marca del Procesador: INTEL Procesador: Intel Celeron Modelo del Procesador: Intel Celeron J4025 Memoria RAM: 8 GB Tipos de Discos que Incluye: Disco Estado Solido (SSD) Capacidad de Disco: Estado Solido SSD 256 GB Sistema Operativo: Windows 11Nucleos del Procesador: 2  NucleosVelocidad del Procesador: Frecuencia base de 2 GHz, hasta 2,9 GHz, 4 MB de caché L2, 2 núcleos y 2 subprocesosCaracteristicas Especiales: Cámara WEB IntegradaTamaño Pantalla: 21.5  PulgadasNo tiene Unidad de CD/DVD IntegradaPuertos HDMI: 1  PuertoPuertos LAN Ethernet: 1  PuertoPuertos USB: 2  PuertosPuertos SD: 1  PuertoSalidas de Audio: 1  Puerto')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (19, N'TODO EN UNO ASUS V222FAK INTEL I5-10210U - RAM 8GB - HDD 1TB - WIN10 - 21.5', CAST(2469900 AS Numeric(18, 0)), 0, N'Marca del Procesador: INTEL Procesador: Intel Celeron Modelo del Procesador: Intel Celeron J4025 Memoria RAM: 8 GB Tipos de Discos que Incluye: Disco Estado Solido (SSD) Capacidad de Disco: Estado Solido SSD 256 GB Sistema Operativo: Windows 11Nucleos del Procesador: 2  NucleosVelocidad del Procesador: Frecuencia base de 2 GHz, hasta 2,9 GHz, 4 MB de caché L2, 2 núcleos y 2 subprocesosCaracteristicas Especiales: Cámara WEB IntegradaTamaño Pantalla: 21.5  PulgadasNo tiene Unidad de CD/DVD IntegradaPuertos HDMI: 1  PuertoPuertos LAN Ethernet: 1  PuertoPuertos USB: 2  PuertosPuertos SD: 1  PuertoSalidas de Audio: 1  Puerto')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (20, N'Computador PC NUC Celeron J4025 Ram 4gb DD 64gb Acer IPS 22” Windows 11', CAST(1399900 AS Numeric(18, 0)), 0, N'Tipo PC: NUCProcesador: Intel Celeron J4025 2.0 GHZ + Cable ACMemoria: 4gb IntegradaAlmacenamiento: 64gb IntegradaSistema Operativo: Windows 11 HomeCombo: Logitech MK120 Alámbrico Monitor: ACER 21.5” SB222Q IPS - Reso')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (21, N'COMPUTADOR DE ESCRITORIO JANUS INTEL CORE I5 9400 SSD 480GB RAM 4GB MON 21.5 TYM', CAST(2399900 AS Numeric(18, 0)), 0, N'Procesador: Intel core i5 9400Velocidad: 4.0ghzFuente de Poder 300WMemoria Ram: 4GB DDR4Unidad de estado Solido: 480GBMonitor JANUS 21.5"Incluye Teclado y Mouse')
INSERT [dbo].[PRODUCTS] ([ID_Product], [Name], [Price], [Stock], [Description]) VALUES (22, N'COMPUTADOR DE ESCRITORIO JANUS INTEL CORE I5 9400 SSD 480GB RAM 4GB MON 21.5 TYM', CAST(2509900 AS Numeric(18, 0)), 0, N'Procesador: Intel core i5 9400Velocidad: 4.0ghzFuente de Poder 300WMemoria Ram: 8GB DDR4Unidad de estado Solido: 480GBMonitor 20 pulgadas LGIncluye Teclado y Mouse')
GO
/****** Object:  Index [PK_IDCategory]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[CATEGORIES] ADD  CONSTRAINT [PK_IDCategory] PRIMARY KEY NONCLUSTERED 
(
	[ID_Category] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDCustomer]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[CUSTOMERS] ADD  CONSTRAINT [PK_IDCustomer] PRIMARY KEY NONCLUSTERED 
(
	[ID_Customer] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDOption]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[OPTIONS] ADD  CONSTRAINT [PK_IDOption] PRIMARY KEY NONCLUSTERED 
(
	[ID_Option] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_DetailOrder]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[ORDER_DETAIL] ADD  CONSTRAINT [PK_DetailOrder] PRIMARY KEY NONCLUSTERED 
(
	[ID_OrderDetail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDOrder]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[ORDERS] ADD  CONSTRAINT [PK_IDOrder] PRIMARY KEY NONCLUSTERED 
(
	[ID_Order] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDProductCategories]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[PRODUCT_CATEGORIES] ADD  CONSTRAINT [PK_IDProductCategories] PRIMARY KEY NONCLUSTERED 
(
	[ID_ProductCategory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDProductOption]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[PRODUCT_OPTIONS] ADD  CONSTRAINT [PK_IDProductOption] PRIMARY KEY NONCLUSTERED 
(
	[ID_ProductOption] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [PK_IDProduct]    Script Date: 4/10/2024 12:49:20 PM ******/
ALTER TABLE [dbo].[PRODUCTS] ADD  CONSTRAINT [PK_IDProduct] PRIMARY KEY NONCLUSTERED 
(
	[ID_Product] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ORDER_DETAIL]  WITH CHECK ADD  CONSTRAINT [FK_IDOrder] FOREIGN KEY([ID_OrderDetail])
REFERENCES [dbo].[ORDERS] ([ID_Order])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ORDER_DETAIL] CHECK CONSTRAINT [FK_IDOrder]
GO
ALTER TABLE [dbo].[ORDER_DETAIL]  WITH CHECK ADD  CONSTRAINT [FK_Product_OrderDetail] FOREIGN KEY([ID_Product])
REFERENCES [dbo].[PRODUCTS] ([ID_Product])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ORDER_DETAIL] CHECK CONSTRAINT [FK_Product_OrderDetail]
GO
ALTER TABLE [dbo].[ORDERS]  WITH CHECK ADD  CONSTRAINT [FK_IDCustomer] FOREIGN KEY([ID_Customer])
REFERENCES [dbo].[CUSTOMERS] ([ID_Customer])
GO
ALTER TABLE [dbo].[ORDERS] CHECK CONSTRAINT [FK_IDCustomer]
GO
ALTER TABLE [dbo].[PRODUCT_CATEGORIES]  WITH CHECK ADD  CONSTRAINT [FK_IDCategory] FOREIGN KEY([ID_ProductCategory])
REFERENCES [dbo].[CATEGORIES] ([ID_Category])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT_CATEGORIES] CHECK CONSTRAINT [FK_IDCategory]
GO
ALTER TABLE [dbo].[PRODUCT_OPTIONS]  WITH CHECK ADD  CONSTRAINT [FK_IDOption] FOREIGN KEY([ID_ProductOption])
REFERENCES [dbo].[OPTIONS] ([ID_Option])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PRODUCT_OPTIONS] CHECK CONSTRAINT [FK_IDOption]
GO
