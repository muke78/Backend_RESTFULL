-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: backend
-- ------------------------------------------------------
-- Server version	8.4.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `ID` char(36) NOT NULL,
  `ActionName` varchar(50) NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

LOCK TABLES `actions` WRITE;
/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
INSERT INTO `actions` VALUES ('1','Ver','2024-10-02 00:19:50','2024-10-02 00:19:50'),('2','Agregar','2024-10-02 00:19:50','2024-10-02 00:19:50'),('3','Editar','2024-10-02 00:19:50','2024-10-02 00:19:50'),('4','Eliminar','2024-10-02 00:19:50','2024-10-02 00:19:50');
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catassets`
--

DROP TABLE IF EXISTS `catassets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catassets` (
  `ID` char(36) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `Cost` decimal(10,2) DEFAULT '0.00',
  `Location` varchar(100) DEFAULT NULL,
  `Condition` varchar(20) DEFAULT NULL,
  `Status` varchar(20) DEFAULT 'Activo',
  `LastMaintenanceDate` date DEFAULT NULL,
  `WarrantyEndDate` date DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catassets`
--

LOCK TABLES `catassets` WRITE;
/*!40000 ALTER TABLE `catassets` DISABLE KEYS */;
INSERT INTO `catassets` VALUES ('19d40518-9693-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Inactivo','2024-07-10','2026-05-10','2024-10-30 01:46:40','2024-10-30 01:50:44'),('6706035a-968e-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Inactivo','2024-07-10','2026-05-10','2024-10-30 01:13:02','2024-10-30 01:25:41'),('95541e31-968e-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:14:20','2024-10-30 01:14:20'),('97b0b4a6-91fa-11ef-a763-00e04c360195','Escritorio para aula','Escritorio de madera para niños','2024-05-10',150.00,'Aula 1','Bueno','Inactivo','2024-07-10','2026-05-10','2024-10-24 05:24:54','2024-10-29 18:37:08'),('a7aa90bf-968f-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:22:00','2024-10-30 01:22:00'),('a9e0b1d3-968f-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:22:04','2024-10-30 01:22:04'),('aa183f03-968e-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:14:55','2024-10-30 01:14:55'),('c3109706-9693-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:51:24','2024-10-30 01:51:24'),('cbdddbc6-9693-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:51:39','2024-10-30 01:51:39'),('cd0ea558-9693-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:51:41','2024-10-30 01:51:41'),('cd50638c-968c-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:01:35','2024-10-30 01:01:35'),('e664b46d-9693-11ef-a763-00e04c360195','Classroom Deskssssdadasdasd','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 01:52:24','2024-10-30 01:52:24'),('e7bdedaf-9689-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 00:40:51','2024-10-30 00:40:51'),('f789adbf-9689-11ef-a763-00e04c360195','Classroom Desk','Wooden desk for children','2024-05-10',1500.00,'Classroom 1','Good','Activo','2024-07-10','2026-05-10','2024-10-30 00:41:17','2024-10-30 00:41:17'),('fc9c77a3-91f9-11ef-a763-00e04c360195','Escritorio para aula','Escritorio de madera para niños','2024-05-10',150.00,'Aula 1','Bueno','Activo','2024-07-10','2026-05-10','2024-10-24 05:20:34','2024-10-24 05:28:44');
/*!40000 ALTER TABLE `catassets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catinventory`
--

DROP TABLE IF EXISTS `catinventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catinventory` (
  `ID` char(36) NOT NULL,
  `ItemCode` varchar(50) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Quantity` int DEFAULT '0',
  `Weight` decimal(10,2) NOT NULL,
  `Height` decimal(10,2) NOT NULL,
  `Width` decimal(10,2) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Condition` varchar(20) DEFAULT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `Status` varchar(20) DEFAULT 'Activo',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catinventory`
--

LOCK TABLES `catinventory` WRITE;
/*!40000 ALTER TABLE `catinventory` DISABLE KEYS */;
INSERT INTO `catinventory` VALUES ('a9064c9d-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color rojo',200,2.30,40.00,50.00,'Salon 1','Nuevo','2024-11-22','Inactivo','2024-10-22 05:34:55','2024-10-29 18:22:37'),('a984a1f8-9069-11ef-a763-00e04c360195','SILLA0100','Sillas','Silla de color azul',200,2.30,40.00,50.00,'Salon 1','Nuevo','2024-11-22','Inactivo','2024-10-22 05:34:56','2024-10-30 17:08:52'),('a9f0afdd-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:34:56','2024-10-22 05:34:56'),('aa47cfa1-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:34:57','2024-10-22 05:34:57'),('aaa435f1-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:34:58','2024-10-22 05:34:58'),('ab0d2718-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:34:58','2024-10-22 05:34:58'),('ab4bd821-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Inactivo','2024-10-22 05:34:59','2024-10-30 17:15:56'),('abe015f4-9069-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:35:00','2024-10-22 05:35:00'),('b03abdd3-9713-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-30 17:07:08','2024-10-30 17:07:08'),('b5d068e4-9713-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-30 17:07:18','2024-10-30 17:07:18'),('c4563eca-9068-11ef-a763-00e04c360195','SILLA043','Silla','Silla de color verde',200,2.30,40.00,50.00,'Salon 2','Nuevo','2024-11-22','Activo','2024-10-22 05:28:31','2024-10-22 05:28:31');
/*!40000 ALTER TABLE `catinventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catsupplies`
--

DROP TABLE IF EXISTS `catsupplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catsupplies` (
  `ID` char(36) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Quantity` int DEFAULT '0',
  `Unit` varchar(50) DEFAULT NULL,
  `Supplier` varchar(100) DEFAULT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `Cost` decimal(10,2) DEFAULT '0.00',
  `Status` varchar(20) DEFAULT 'Activo',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catsupplies`
--

LOCK TABLES `catsupplies` WRITE;
/*!40000 ALTER TABLE `catsupplies` DISABLE KEYS */;
INSERT INTO `catsupplies` VALUES ('5f5212c4-91f7-11ef-a763-00e04c360195','Pizarones','Pizarrones de color verde',40,'Paquetes','Donacion','2024-08-15','2040-07-15',10006.50,'Inactivo','2024-10-24 05:01:51','2024-10-30 21:54:52'),('934aa82f-9657-11ef-a763-00e04c360195','Crayolas','Caja con 32 crayolas',40,'Cajas','SNNTE','2024-08-15','2040-07-15',10006.50,'Inactivo','2024-10-29 18:40:34','2024-10-29 18:41:40'),('b9fc5b53-91ee-11ef-a763-00e04c360195','Crayolas','Caja con 32 crayolas',40,'Cajas','SNNTE','2024-08-15','2040-07-15',10006.50,'Activo','2024-10-24 03:59:58','2024-10-30 19:16:06'),('f6f79435-91ef-11ef-a763-00e04c360195','Crayones','Caja con 24 crayones',50,'Cajas','SNTE','2024-08-15',NULL,25.50,'Activo','2024-10-24 04:08:49','2024-10-30 19:16:06'),('f7876162-91ef-11ef-a763-00e04c360195','Crayones','Caja con 24 crayones',50,'Cajas','SNTE','2024-08-15',NULL,25.50,'Activo','2024-10-24 04:08:50','2024-10-30 19:16:06'),('f802aabf-91ef-11ef-a763-00e04c360195','Crayones','Caja con 24 crayones',50,'Cajas','SNTE','2024-08-15',NULL,25.50,'Activo','2024-10-24 04:08:51','2024-10-30 19:16:06'),('f8839645-91ef-11ef-a763-00e04c360195','Crayolas','Caja con 32 crayolas',40,'Cajas','SNNTE','2024-08-15','2040-07-15',10006.50,'Inactivo','2024-10-24 04:08:52','2024-10-29 18:42:05');
/*!40000 ALTER TABLE `catsupplies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnostic`
--

DROP TABLE IF EXISTS `diagnostic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostic` (
  `ID` char(36) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostic`
--

LOCK TABLES `diagnostic` WRITE;
/*!40000 ALTER TABLE `diagnostic` DISABLE KEYS */;
/*!40000 ALTER TABLE `diagnostic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `ID` char(36) NOT NULL,
  `ModuleName` varchar(100) NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES ('1','Modulos','2024-10-02 00:15:59','2024-10-02 00:15:59'),('10','Catalogo insumos','2024-10-02 00:15:59','2024-10-02 00:15:59'),('11','Catalogo activos','2024-10-02 00:15:59','2024-10-02 00:15:59'),('12','Catalogo inventario','2024-10-02 00:15:59','2024-10-02 00:15:59'),('13','Diagnostico','2024-10-02 00:15:59','2024-10-02 00:15:59'),('2','Permisos','2024-10-02 00:15:59','2024-10-02 00:15:59'),('3','Acciones','2024-10-02 00:15:59','2024-10-02 00:15:59'),('4','Permisos usuario','2024-10-02 00:15:59','2024-10-02 00:15:59'),('5','Usuarios','2024-10-02 00:15:59','2024-10-02 00:15:59'),('6','Maestros','2024-10-02 00:15:59','2024-10-02 00:15:59'),('7','Padres','2024-10-02 00:15:59','2024-10-02 00:15:59'),('8','Estudiantes','2024-10-02 00:15:59','2024-10-02 00:15:59'),('9','Historico estudiantes','2024-10-02 00:15:59','2024-10-02 00:15:59');
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `ID` char(36) NOT NULL,
  `TeacherID` char(36) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Ocupation` varchar(60) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Curp` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` bigint NOT NULL,
  `Age` int NOT NULL,
  `Address` varchar(200) NOT NULL,
  `EmergencyContact` varchar(100) NOT NULL,
  `EmergencyPhone` varchar(15) NOT NULL,
  `Created` datetime DEFAULT (now()),
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` varchar(20) DEFAULT 'Activo',
  PRIMARY KEY (`ID`),
  KEY `fk_teacher` (`TeacherID`),
  CONSTRAINT `fk_teacher` FOREIGN KEY (`TeacherID`) REFERENCES `teachers` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

LOCK TABLES `parents` WRITE;
/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
INSERT INTO `parents` VALUES ('1e2cf4c9-904a-11ef-a763-00e04c360195','d17851a7-86b3-11ef-8a8b-00e04c360195','Juan','Martínez López','1975-04-15','Carpintero','Masculino','JMLA750415HDFRZR01','juan.martinez75@gmail.com',5540981234,49,'Avenida Central 123, Ciudad de México','María López','5543998765','2024-10-22 01:49:08','2024-10-22 01:54:24','Activo'),('67baa960-9766-11ef-a763-00e04c360195','d17851a7-86b3-11ef-8a8b-00e04c360195','','','1975-04-15','','Masculino','JMLA750415HDFRZR01','juan.martinez75@gmail.com',5540981234,49,'Avenida Central 123, Ciudad de México','María López','5543998765','2024-10-31 02:59:15','2024-10-31 03:09:37','Inactivo'),('6ddb5a5b-9048-11ef-a763-00e04c360195','f0bf974d-8167-11ef-a62a-00e04c360195','Angelina','Montano Salazar','1974-09-08','Ama de casa','Femenino','DASSASSDCASCAS','angelinaMontano40@gmail.com',5511909105,50,'Ecatepec','Miguel Gonzalez','5511909105','2024-10-22 01:37:02','2024-10-22 04:11:02','Activo'),('954b053e-9766-11ef-a763-00e04c360195','d17851a7-86b3-11ef-8a8b-00e04c360195','Jose','Antonio Salazar','1950-02-10','Obrero','Masculino','asdasdnaklsd0','jose20@gmail.com',5511909105,50,'Ecatepec','Miguel Gonzalez','5511909105','2024-10-31 03:00:31','2024-10-31 03:00:31','Activo'),('c40f8ac5-884d-11ef-a763-00e04c360195','f0bf974d-8167-11ef-a62a-00e04c360195','Carmen','Rivera Cornejo','1974-09-08','Ama de casa','Femenino','DASSASSDCASCAS','carmen0809@gmail.com',5511909105,50,'Ecatepec','Miguel Gonzalez','5511909105','2024-10-11 21:55:05','2024-10-22 04:12:35','Inactivo'),('c62e416f-9765-11ef-a763-00e04c360195','d17851a7-86b3-11ef-8a8b-00e04c360195','Jose','Antonio Salazar','1950-02-10','Obrero','Masculino','asdasdnaklsd0','jose40@gmail.com',5511909105,50,'Ecatepec','Miguel Gonzalez','5511909105','2024-10-31 02:54:44','2024-10-31 02:54:44','Activo');
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `ID` char(36) NOT NULL,
  `ModuleID` char(36) NOT NULL,
  `ActionID` char(36) NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `ModuleID` (`ModuleID`),
  KEY `ActionID` (`ActionID`),
  CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`ModuleID`) REFERENCES `modules` (`ID`),
  CONSTRAINT `permissions_ibfk_2` FOREIGN KEY (`ActionID`) REFERENCES `actions` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES ('5e792825-8062-11ef-949a-00e04c360195','1','1','2024-10-02 00:14:02','2024-10-02 00:14:02'),('ad7e3b66-8061-11ef-949a-00e04c360195','1','2','2024-10-02 00:14:02','2024-10-02 00:14:02'),('ad8a4710-8061-11ef-949a-00e04c360195','1','3','2024-10-02 00:14:02','2024-10-02 00:14:02'),('cfd1d73b-8063-11ef-949a-00e04c360195','1','4','2024-10-02 00:14:02','2024-10-02 00:14:02');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_teacher_history`
--

DROP TABLE IF EXISTS `student_teacher_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_teacher_history` (
  `ID` char(36) NOT NULL,
  `StudentID` char(36) NOT NULL,
  `TeacherID` char(36) NOT NULL,
  `Grade` varchar(50) NOT NULL,
  `Group` varchar(10) NOT NULL,
  `StartDate` date NOT NULL,
  `EndDate` date DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `StudentID` (`StudentID`),
  KEY `TeacherID` (`TeacherID`),
  CONSTRAINT `student_teacher_history_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`ID`),
  CONSTRAINT `student_teacher_history_ibfk_2` FOREIGN KEY (`TeacherID`) REFERENCES `teachers` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_teacher_history`
--

LOCK TABLES `student_teacher_history` WRITE;
/*!40000 ALTER TABLE `student_teacher_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_teacher_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `ID` char(36) NOT NULL,
  `IDTeacher` char(36) NOT NULL,
  `IDMom` char(36) NOT NULL,
  `IDDad` char(36) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Grade` varchar(50) NOT NULL,
  `Group` varchar(10) NOT NULL,
  `AgeStudent` int NOT NULL,
  `Curp` varchar(20) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `EmergencyContact` varchar(100) NOT NULL,
  `EmergencyPhone` varchar(15) NOT NULL,
  `Allergies` varchar(255) NOT NULL,
  `MedicalConditions` varchar(255) NOT NULL,
  `EnrollmentDate` date NOT NULL,
  `Status` varchar(20) DEFAULT 'Activo',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `fk_students_mom` (`IDMom`),
  KEY `fk_students_dad` (`IDDad`),
  KEY `fk_students_teacher` (`IDTeacher`),
  CONSTRAINT `fk_students_dad` FOREIGN KEY (`IDDad`) REFERENCES `parents` (`ID`),
  CONSTRAINT `fk_students_mom` FOREIGN KEY (`IDMom`) REFERENCES `parents` (`ID`),
  CONSTRAINT `fk_students_teacher` FOREIGN KEY (`IDTeacher`) REFERENCES `teachers` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `ID` char(36) NOT NULL,
  `TeacherID` char(36) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `NameSchool` varchar(150) NOT NULL,
  `LevelStudies` varchar(45) NOT NULL,
  `StudentsInCharge` int NOT NULL,
  `Grade` varchar(50) NOT NULL,
  `Group` varchar(10) NOT NULL,
  `CCT` varchar(45) NOT NULL,
  `SchoolZone` varchar(15) NOT NULL,
  `WorkShift` varchar(45) NOT NULL,
  `Curp` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Age` int NOT NULL,
  `Address` varchar(255) NOT NULL,
  `EmergencyContact` varchar(100) NOT NULL,
  `EmergencyPhone` varchar(15) NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` varchar(20) DEFAULT 'Activo',
  PRIMARY KEY (`ID`),
  KEY `fk_teachers_user` (`TeacherID`),
  CONSTRAINT `fk_teachers_user` FOREIGN KEY (`TeacherID`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('00f7fb0c-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:01:49','2025-03-24 04:01:49','Activo'),('0459973b-08a1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 05:13:30','2025-03-24 05:13:30','Activo'),('1017e7ec-089d-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:45:12','2025-03-24 04:45:12','Activo'),('12eed337-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:59:35','2025-03-24 04:59:35','Activo'),('1ae5fec0-091c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 19:54:36','2025-03-24 19:54:36','Activo'),('20d49ace-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','yoc@gmail.com','',0,'','','','2025-03-27 05:03:35','2025-03-27 05:03:35','Activo'),('2254af97-0559-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','erika@gmail.com','',0,'','','','2025-03-20 01:01:23','2025-03-20 01:01:23','Activo'),('2c99b72e-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:03:02','2025-03-24 04:03:02','Activo'),('2ceeb250-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','johana@gmail.com','',0,'','','','2025-03-27 05:03:55','2025-03-27 05:03:55','Activo'),('2ec40402-089d-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:46:03','2025-03-24 04:46:03','Activo'),('2f4f5ae4-0568-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba4@gmail.com','',0,'','','','2025-03-20 02:49:07','2025-03-20 02:49:07','Activo'),('341d5ef6-090b-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','monse@gmail.com','',0,'','','','2025-03-24 17:53:37','2025-03-24 17:53:37','Activo'),('346503a3-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','carina@gmail.com','',0,'','','','2025-03-27 05:04:08','2025-03-27 05:04:08','Activo'),('3dcb8a75-0929-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pepesalmoran@gmail.com','',0,'','','','2025-03-24 21:28:38','2025-03-24 21:28:38','Activo'),('430ee454-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:03:40','2025-03-24 04:03:40','Activo'),('4bbdff75-0ac1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-26 22:09:36','2025-03-26 22:09:36','Activo'),('4c4b7bc3-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','katherine24124@outlook.com','',0,'','','','2025-03-27 05:04:48','2025-03-27 05:04:48','Activo'),('5084ed57-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:18:22','2025-03-24 04:18:22','Activo'),('5689946b-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','kevin@gmail.com','',0,'','','','2025-03-24 05:01:29','2025-03-24 05:01:29','Activo'),('58342b2d-0890-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 03:14:09','2025-03-24 03:14:09','Activo'),('5a878769-0ac1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jj@gmail.com','',0,'','','','2025-03-26 22:10:01','2025-03-26 22:10:01','Activo'),('62bb3db4-0898-11f0-ae9f-d843ae0db894','28137808-0898-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','alguienexample2@gmail.com','',0,'','','','2025-03-24 04:11:43','2025-03-24 04:11:43','Activo'),('64e27359-0561-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba3@gmail.com','',0,'','','','2025-03-20 02:00:31','2025-03-20 02:00:31','Activo'),('6955b304-089c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:40:32','2025-03-24 04:40:32','Activo'),('69b12989-0afa-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','Jazmin@gmail.com','',0,'','','','2025-03-27 04:58:27','2025-03-27 04:58:27','Activo'),('6d9e661a-08a2-11f0-ae9f-d843ae0db894','663b2f2a-08a2-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 05:23:36','2025-03-24 05:23:36','Activo'),('7086e9f9-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:26:25','2025-03-24 04:26:25','Activo'),('70f10f34-055f-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba@prueba.gmail','',0,'','','','2025-03-20 01:46:32','2025-03-20 01:46:32','Activo'),('715f6ff6-0afa-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','gerardo@gmail.com','',0,'','','','2025-03-27 04:58:40','2025-03-27 04:58:40','Activo'),('793e03a7-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','laura@gmail.com','',0,'','','','2025-03-24 05:02:27','2025-03-24 05:02:27','Activo'),('79fd8a60-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aline@gmail.com','',0,'','','','2025-03-27 04:58:55','2025-03-27 04:58:55','Activo'),('7f53222a-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','ingrid@gmail.com','',0,'','','','2025-03-27 04:59:04','2025-03-27 04:59:04','Activo'),('8082446e-0925-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','stef@gmail.com','',0,'','','','2025-03-24 21:01:52','2025-03-24 21:01:52','Activo'),('811fd76f-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','zapata@gmail.com','',0,'','','','2025-03-24 05:02:40','2025-03-24 05:02:40','Activo'),('8530b3b1-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fatima@gmail.com','',0,'','','','2025-03-27 04:59:14','2025-03-27 04:59:14','Activo'),('85382ce9-089b-11f0-ae9f-d843ae0db894','7254c2a1-089b-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:34:09','2025-03-24 04:34:09','Activo'),('88bc1d4f-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fabiola@','',0,'','','','2025-03-24 05:02:53','2025-03-24 05:02:53','Activo'),('89bb11bc-0912-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jj@gmail.com','',0,'','','','2025-03-24 18:46:07','2025-03-24 18:46:07','Activo'),('8d165148-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jesus@gmail.com','',0,'','','','2025-03-27 04:59:27','2025-03-27 04:59:27','Activo'),('93ff8503-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:27:24','2025-03-24 04:27:24','Activo'),('946e2a49-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','sdas','',0,'','','','2025-03-24 05:03:13','2025-03-24 05:03:13','Activo'),('971ec289-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pablo@gmail.com','',0,'','','','2025-03-27 04:59:44','2025-03-27 04:59:44','Activo'),('9aa4189b-089c-11f0-ae9f-d843ae0db894','80832c12-089c-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:41:55','2025-03-24 04:41:55','Activo'),('a0c90818-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aritzel@gmail.com','',0,'','','','2025-03-27 05:00:00','2025-03-27 05:00:00','Activo'),('a260125b-0af6-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-27 04:31:25','2025-03-27 04:31:25','Activo'),('a79f6303-0b70-11f0-ae9f-d843ae0db894','a0c850f2-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aurora@gmail.com','',0,'','','','2025-03-27 19:04:52','2025-03-27 19:04:52','Activo'),('a83eddb4-0898-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:13:39','2025-03-24 04:13:39','Activo'),('a93423ab-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fabiola@gmail.com','',0,'','','','2025-03-24 05:03:48','2025-03-24 05:03:48','Activo'),('aa49d41c-975e-11ef-a763-00e04c360195','bcd3df3c-8157-11ef-a62a-00e04c360195','Erick Miguel','Gonzalez Rivera','2000-12-29','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',30,'Primero','B','15EJN0089P','E30','Matutino','GORE001229HMCNVRB3','muke7881891@gmail.com','5511909105',23,'Calle Estrella, 123, Colonia Centro, CDMX','Carmen Rivera Cornejo','5512345678','2024-10-31 02:03:51','2024-10-31 02:03:51','Activo'),('aaebe059-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','valeria@gmail.com','',0,'','','','2025-03-27 05:00:17','2025-03-27 05:00:17','Activo'),('b09a3498-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pepe@gmail.com','',0,'','','','2025-03-24 05:04:00','2025-03-24 05:04:00','Activo'),('b1bee820-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','lucy@gmail.com','',0,'','','','2025-03-27 05:00:28','2025-03-27 05:00:28','Activo'),('b2798292-0896-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','carmenrcogato@gmail.com','',0,'','','','2025-03-24 03:59:38','2025-03-24 03:59:38','Activo'),('b5d1a86b-091b-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 19:51:46','2025-03-24 19:51:46','Activo'),('b89ee7cd-0ae7-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','yallegaronlaspipshas@gmail.com','',0,'','','','2025-03-27 02:44:39','2025-03-27 02:44:39','Activo'),('be28fc03-0ad0-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','ise@gmail.com','',0,'','','','2025-03-27 00:00:10','2025-03-27 00:00:10','Activo'),('be9e7bf6-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','monserrat@gmail.com','',0,'','','','2025-03-24 05:04:23','2025-03-24 05:04:23','Activo'),('c3cdf816-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:21:35','2025-03-24 04:21:35','Activo'),('cd1cd3a5-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:21:51','2025-03-24 04:21:51','Activo'),('d176c3b6-86c5-11ef-8a8b-00e04c360195','d175c2f1-86c5-11ef-8a8b-00e04c360195','Erick Miguel','','2000-12-29','','',0,'','','','','','','','',0,'','','','2024-10-09 23:09:25','2024-10-31 02:12:43','Activo'),('d17851a7-86b3-11ef-8a8b-00e04c360195','d1773f12-86b3-11ef-8a8b-00e04c360195','Daires','Gonzalez Rivera','2009-09-25','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',0,'','','','','','','daires2509@gmail.com','',0,'','','','2024-10-09 21:00:34','2024-10-22 01:47:18','Activo'),('d2652515-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','juan@gmail.com','',0,'','','','2025-03-27 05:01:23','2025-03-27 05:01:23','Activo'),('d2e642e4-089c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:43:29','2025-03-24 04:43:29','Activo'),('dac4203b-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','irvein@gmail.com','',0,'','','','2025-03-27 05:01:37','2025-03-27 05:01:37','Activo'),('dc570719-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:29:26','2025-03-24 04:29:26','Activo'),('e282f45c-0896-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:00:58','2025-03-24 04:00:58','Activo'),('ee32d1ac-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','emmanuel@gmail.com','',0,'','','','2025-03-27 05:02:10','2025-03-27 05:02:10','Activo'),('f0bf974d-8167-11ef-a62a-00e04c360195','b6b4d5ff-8167-11ef-a62a-00e04c360195','Erick Miguel','Gonzalez Rivera','2000-12-29','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',30,'Primero','B','15EJN0089P','E30','Matutino','GORE001229HMCNVRB3','muke7881@gmail.com','5511909105',24,'Calle Estrella, 123, Colonia Centro, CDMX','Carmen Rivera Cornejo','5512345678','2024-10-03 03:14:49','2024-10-22 01:47:18','Activo'),('fa6fc749-055f-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba2@gmail.com','',0,'','','','2025-03-20 01:50:23','2025-03-20 01:50:23','Activo');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_permissions`
--

DROP TABLE IF EXISTS `user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_permissions` (
  `ID` char(36) NOT NULL,
  `UserID` char(36) NOT NULL,
  `PermitID` char(36) NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `PermitID` (`PermitID`),
  KEY `user_permissions_ibfk_1` (`UserID`),
  CONSTRAINT `user_permissions_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`) ON DELETE CASCADE,
  CONSTRAINT `user_permissions_ibfk_2` FOREIGN KEY (`PermitID`) REFERENCES `permissions` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_permissions`
--

LOCK TABLES `user_permissions` WRITE;
/*!40000 ALTER TABLE `user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` char(36) NOT NULL,
  `NameUser` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` char(150) DEFAULT NULL,
  `ProfilePicture` varchar(500) DEFAULT NULL,
  `Role` varchar(50) DEFAULT 'user',
  `AccountType` varchar(20) DEFAULT NULL,
  `LastLogin` datetime DEFAULT NULL,
  `AccountStatus` varchar(20) DEFAULT 'Activo',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('024b0f46-8092-11ef-bf4d-d843ae0db894','Maria Jose','petite.mary05@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$y2fgA8SOm5ShtqhIdOJoPA$SjUR7rIqxoenvzGPWVc4kPOZpiL4YMNHfA46l4RP6yY','https://i.pinimg.com/736x/45/e6/48/45e6481de019b1b0fe4a6b866bf093e6.jpg','admin','normal','2025-04-01 22:30:16','Activo','2024-10-02 01:43:26','2025-04-01 22:30:16'),('a79da5d1-0b70-11f0-ae9f-d843ae0db894','Aurora','aurora@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$tRWgBBUiFWwPNUSx8REa4g$r6udsrT8xBH4FyQRNXvimFsCkBWX+8br7nXnoSeI3io',NULL,'user','normal',NULL,'Activo','2025-03-27 19:04:52','2025-03-29 02:41:07'),('b6b4d5ff-8167-11ef-a62a-00e04c360195','Erick Muke','muke7881@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$y0S1I/qx152uwXeeC8dF9g$m/G4GtEfcDhMngGaO5TSfPC6FQxMoclnydpRha0xp5c',NULL,'user','normal','2025-03-29 03:31:17','Activo','2024-10-03 03:13:11','2025-03-29 03:31:17'),('d1773f12-86b3-11ef-8a8b-00e04c360195','La pecas','daires2509@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$h06TyYbTW1uo6xog1jl96w$7o9T7++3WsH6mW3vTWsAlRstJoOTn0OBAz1kOC/Pj9U',NULL,'user','normal','2025-03-29 02:14:15','Activo','2024-10-09 21:00:34','2025-03-29 02:41:07'),('d1b6c3a4-0c86-11f0-ae9f-d843ae0db894','Erick Gonzalez','erickm.gonzalez.rivera@gmail.com',NULL,'https://lh3.googleusercontent.com/a/ACg8ocIr7l_94AWgFXpAuxJRF_w_5f1MSBIK1AlWbej6rvteFmdG0dU=s96-c','user','google','2025-03-29 06:18:05','Activo','2025-03-29 04:16:03','2025-03-29 06:18:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'backend'
--
/*!50003 DROP PROCEDURE IF EXISTS `deleteTeacherByUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteTeacherByUser`(IN userId CHAR(36))
deleteTeacher:BEGIN
DECLARE teacherID CHAR(36);
	-- Validamos que el id de el usuario me responda con el id del maestro -- 
	SELECT ID INTO teacherID FROM teachers WHERE TeacherID = userId;
    
     -- Si no se encuentra un maestro con ese userId, salimos del procedimiento
		IF teacherID IS NULL THEN
         LEAVE deleteTeacher;
		END IF;
    
    -- Borramos al maestro cuando se haya eliminado el usuario -- 
    DELETE FROM teachers WHERE ID = teacherID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertTeacherBeforeUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertTeacherBeforeUser`(IN email VARCHAR(255))
BEGIN
	DECLARE userId CHAR(36);
    
    -- Validar y obtener el ID del usario -- 
    SELECT ID INTO userId FROM users WHERE Email = email LIMIT 1;
    
    -- Insertar en la base de datos en la tabla teachers el registro -- \
    INSERT INTO teachers(ID, TeacherID, FirstName, LastName, NameSchool, LevelStudies, StudentsInCharge, Grade, `Group`, CCT, SchoolZone, WorkShift, Curp, Email, Phone, Age, Address, EmergencyContact, EmergencyPhone)
    VALUES (UUID(), userId, "", "", "", "", 0, "", "", "", "", "", "", email, "", 0, "", "", "");
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ObtenerEstudiantesActivos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerEstudiantesActivos`()
BEGIN
SELECT s.ID,
       s.IDTeacher,
       s.IDMom,
       s.IDDad,
       CONCAT(m.FirstName, ' ', m.LastName) as Mama,
       CONCAT(d.FirstName, ' ', d.LastName) as Papa,
       CONCAT(t.FirstName, ' ', t.LastName) as Maestro,
       s.FirstName,
       s.LastName,
       s.Grade,
       s.`Group`,
       s.Agestudent,
       s.Curp,
       s.Dateofbirth,
       s.Gender,
       s.Address,
       s.Emergencycontact,
       s.Emergencyphone,
       s.Allergies,
       s.Medicalconditions,
       s.Enrollmentdate
FROM students s
         LEFT JOIN teachers t ON s.IDTeacher = t.TeacherID
         LEFT JOIN parents m ON s.IDMom = m.ID
         LEFT JOIN parents d ON s.IDDad = d.ID
 WHERE s.Status = 'Activo'
ORDER BY s.LastName ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ObtenerPadresActivos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerPadresActivos`()
BEGIN
SELECT
        p.ID,
        p.TeacherID,
        CONCAT(t.FirstName, ' ', t.LastName) AS Profesor,
        p.FirstName,
        p.LastName,
        p.DateOfBirth,
        p.Ocupation,
        p.Gender,
        p.Curp,
        p.Email,
        p.Phone,
        p.Age,
        p.Address,
        p.EmergencyContact,
        p.EmergencyPhone,
        p.Created,
        p.Updated,
        p.Status
    FROM parents p
    LEFT JOIN teachers t ON p.TeacherID = t.ID
    WHERE p.Status = 'Activo'
    ORDER BY p.LastName ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ObtenerPadresPorMaestro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerPadresPorMaestro`(IN idMaestro char(36))
BEGIN
SELECT parents.ID,
       parents.TeacherID,
       CONCAT(teachers.FirstName, ' ', teachers.LastName) as Profesor,
       parents.FirstName,
       parents.LastName,
       parents.DateOfBirth,
       parents.Ocupation,
       parents.Gender,
       parents.Curp,
       parents.Email,
       parents.Phone,
       parents.Age,
       parents.Address,
       parents.EmergencyContact,
       parents.EmergencyPhone,
       parents.Created,
       parents.Updated,
       parents.Status
FROM parents
LEFT JOIN teachers ON parents.TeacherID = teachers.ID
WHERE parents.TeacherID = idMaestro AND parents.Status = "Activo";
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-01 22:32:40
