-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: backend
-- ------------------------------------------------------
-- Server version	8.0.39

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
  PRIMARY KEY (`ID`,`TeacherID`),
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
  `Status` varchar(20) DEFAULT 'Activo' /*!80023 INVISIBLE */,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `IDMom` (`IDMom`),
  KEY `IDDad` (`IDDad`),
  KEY `IDTeacher` (`IDTeacher`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`IDMom`) REFERENCES `parents` (`ID`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`IDMom`) REFERENCES `parents` (`ID`),
  CONSTRAINT `students_ibfk_3` FOREIGN KEY (`IDDad`) REFERENCES `parents` (`ID`),
  CONSTRAINT `students_ibfk_4` FOREIGN KEY (`IDTeacher`) REFERENCES `parents` (`TeacherID`)
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
  `Created` datetime DEFAULT (now()),
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` varchar(20) DEFAULT 'Activo',
  PRIMARY KEY (`ID`,`TeacherID`),
  KEY `teachers_ibfk_1` (`TeacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES ('0037e18b-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Beatrice89@yahoo.com','',0,'','','','2025-04-27 06:34:45','2025-04-27 06:34:45','Activo'),('00ccb3e4-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Gladyce_Kunze11@hotmail.com','',0,'','','','2025-04-27 06:34:46','2025-04-27 06:34:46','Activo'),('00f7fb0c-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:01:49','2025-03-24 04:01:49','Activo'),('014bb7a2-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Catherine70@yahoo.com','',0,'','','','2025-04-27 06:34:47','2025-04-27 06:34:47','Activo'),('01ebc37e-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Trevion.Gibson35@hotmail.com','',0,'','','','2025-04-27 06:34:48','2025-04-27 06:34:48','Activo'),('02625c8d-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Gretchen.Predovic@gmail.com','',0,'','','','2025-04-27 06:34:49','2025-04-27 06:34:49','Activo'),('02d38ade-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Catherine91@gmail.com','',0,'','','','2025-04-27 06:34:49','2025-04-27 06:34:49','Activo'),('0342ea20-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lamar.Witting79@yahoo.com','',0,'','','','2025-04-27 06:34:50','2025-04-27 06:34:50','Activo'),('03bed620-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Carleton.Wyman@yahoo.com','',0,'','','','2025-04-27 06:34:51','2025-04-27 06:34:51','Activo'),('045188c5-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Nora26@yahoo.com','',0,'','','','2025-04-27 06:34:52','2025-04-27 06:34:52','Activo'),('0459973b-08a1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 05:13:30','2025-03-24 05:13:30','Activo'),('04b9d6bc-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Murray_Schuppe@hotmail.com','',0,'','','','2025-04-27 06:34:53','2025-04-27 06:34:53','Activo'),('052a697b-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Delpha_Romaguera52@yahoo.com','',0,'','','','2025-04-27 06:34:53','2025-04-27 06:34:53','Activo'),('0561718e-1d0f-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','ariel@gmail.com','',0,'','','','2025-04-19 05:11:20','2025-04-19 05:11:20','Activo'),('058db1eb-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Vella.Purdy@gmail.com','',0,'','','','2025-04-27 06:34:54','2025-04-27 06:34:54','Activo'),('05f91386-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Shawna.Gaylord80@gmail.com','',0,'','','','2025-04-27 06:34:55','2025-04-27 06:34:55','Activo'),('066fed3d-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Otto.OReilly62@hotmail.com','',0,'','','','2025-04-27 06:34:56','2025-04-27 06:34:56','Activo'),('06ea8111-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Rosendo_Schroeder13@hotmail.com','',0,'','','','2025-04-27 06:34:56','2025-04-27 06:34:56','Activo'),('074c5027-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Adrianna_Marvin33@yahoo.com','',0,'','','','2025-04-27 06:34:57','2025-04-27 06:34:57','Activo'),('07a3d2ab-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jaquelin38@yahoo.com','',0,'','','','2025-04-27 06:34:58','2025-04-27 06:34:58','Activo'),('07faf703-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Alison_Leffler@yahoo.com','',0,'','','','2025-04-27 06:34:58','2025-04-27 06:34:58','Activo'),('08701a74-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Durward71@yahoo.com','',0,'','','','2025-04-27 06:34:59','2025-04-27 06:34:59','Activo'),('0902ab99-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Providenci_Hettinger3@gmail.com','',0,'','','','2025-04-27 06:35:00','2025-04-27 06:35:00','Activo'),('09633aa6-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jacinthe53@gmail.com','',0,'','','','2025-04-27 06:35:00','2025-04-27 06:35:00','Activo'),('09d57640-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Brielle.Gottlieb1@hotmail.com','',0,'','','','2025-04-27 06:35:01','2025-04-27 06:35:01','Activo'),('0a6814e3-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Emmett_Frami63@hotmail.com','',0,'','','','2025-04-27 06:35:02','2025-04-27 06:35:02','Activo'),('0ae2c775-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lucie13@yahoo.com','',0,'','','','2025-04-27 06:35:03','2025-04-27 06:35:03','Activo'),('1017e7ec-089d-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:45:12','2025-03-24 04:45:12','Activo'),('12eed337-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:59:35','2025-03-24 04:59:35','Activo'),('1ae5fec0-091c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 19:54:36','2025-03-24 19:54:36','Activo'),('1be3c487-21d6-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','lanadelrey@gmail.com','',0,'','','','2025-04-25 07:06:32','2025-04-25 07:06:32','Activo'),('1eb71247-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Luna_Herman32@yahoo.com','',0,'','','','2025-04-27 06:35:36','2025-04-27 06:35:36','Activo'),('20d49ace-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','yoc@gmail.com','',0,'','','','2025-03-27 05:03:35','2025-03-27 05:03:35','Activo'),('2254af97-0559-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','erika@gmail.com','',0,'','','','2025-03-20 01:01:23','2025-03-20 01:01:23','Activo'),('2c99b72e-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:03:02','2025-03-24 04:03:02','Activo'),('2ceeb250-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','johana@gmail.com','',0,'','','','2025-03-27 05:03:55','2025-03-27 05:03:55','Activo'),('2ebc4125-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lily_Hartmann@hotmail.com','',0,'','','','2025-04-27 06:36:03','2025-04-27 06:36:03','Activo'),('2ec40402-089d-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:46:03','2025-03-24 04:46:03','Activo'),('2f336aa0-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Mackenzie97@gmail.com','',0,'','','','2025-04-27 06:36:04','2025-04-27 06:36:04','Activo'),('2f4f5ae4-0568-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba4@gmail.com','',0,'','','','2025-03-20 02:49:07','2025-03-20 02:49:07','Activo'),('2fbf818d-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Emmalee34@hotmail.com','',0,'','','','2025-04-27 06:36:05','2025-04-27 06:36:05','Activo'),('3045a47c-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Russell.Cormier61@yahoo.com','',0,'','','','2025-04-27 06:36:06','2025-04-27 06:36:06','Activo'),('30b7c6df-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Brooklyn.Purdy3@yahoo.com','',0,'','','','2025-04-27 06:36:06','2025-04-27 06:36:06','Activo'),('311700cc-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Haylee_Larkin@yahoo.com','',0,'','','','2025-04-27 06:36:07','2025-04-27 06:36:07','Activo'),('3176bd64-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Della40@yahoo.com','',0,'','','','2025-04-27 06:36:08','2025-04-27 06:36:08','Activo'),('31ce5179-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Amir_Kuphal92@hotmail.com','',0,'','','','2025-04-27 06:36:08','2025-04-27 06:36:08','Activo'),('341d5ef6-090b-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','monse@gmail.com','',0,'','','','2025-03-24 17:53:37','2025-03-24 17:53:37','Activo'),('346503a3-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','carina@gmail.com','',0,'','','','2025-03-27 05:04:08','2025-03-27 05:04:08','Activo'),('37d3f555-19dc-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','alberto@prueba.com','',0,'','','','2025-04-15 03:30:06','2025-04-15 03:30:06','Activo'),('3dcb8a75-0929-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pepesalmoran@gmail.com','',0,'','','','2025-03-24 21:28:38','2025-03-24 21:28:38','Activo'),('430ee454-0897-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:03:40','2025-03-24 04:03:40','Activo'),('43531b04-19dc-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','daniela@prueba.com','',0,'','','','2025-04-15 03:30:26','2025-04-15 03:30:26','Activo'),('442b6da7-2009-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','zenitsu@gmail.com','',0,'','','','2025-04-23 00:07:41','2025-04-23 00:07:41','Activo'),('4625d458-2361-11f0-b8d7-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','xD@gmail.com','',0,'','','','2025-04-27 06:15:14','2025-04-27 06:15:14','Activo'),('4bbdff75-0ac1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-26 22:09:36','2025-03-26 22:09:36','Activo'),('4c4b7bc3-0afb-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','katherine24124@outlook.com','',0,'','','','2025-03-27 05:04:48','2025-03-27 05:04:48','Activo'),('4d38017d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Gilda94@gmail.com','',0,'','','','2025-04-27 06:29:45','2025-04-27 06:29:45','Activo'),('5084ed57-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:18:22','2025-03-24 04:18:22','Activo'),('5689946b-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','kevin@gmail.com','',0,'','','','2025-03-24 05:01:29','2025-03-24 05:01:29','Activo'),('58153166-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Willis_Marquardt@yahoo.com','',0,'','','','2025-04-27 06:30:03','2025-04-27 06:30:03','Activo'),('58342b2d-0890-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 03:14:09','2025-03-24 03:14:09','Activo'),('58ac2d0a-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Willie.Zemlak10@hotmail.com','',0,'','','','2025-04-27 06:30:04','2025-04-27 06:30:04','Activo'),('5935896c-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Kari99@hotmail.com','',0,'','','','2025-04-27 06:30:05','2025-04-27 06:30:05','Activo'),('59bed316-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Roger_Lockman@hotmail.com','',0,'','','','2025-04-27 06:30:06','2025-04-27 06:30:06','Activo'),('5a471116-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Loraine.Thompson76@yahoo.com','',0,'','','','2025-04-27 06:30:07','2025-04-27 06:30:07','Activo'),('5a878769-0ac1-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jj@gmail.com','',0,'','','','2025-03-26 22:10:01','2025-03-26 22:10:01','Activo'),('5ad67f28-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Ellis.Oberbrunner@yahoo.com','',0,'','','','2025-04-27 06:30:08','2025-04-27 06:30:08','Activo'),('5b68ddb7-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Myrtle44@gmail.com','',0,'','','','2025-04-27 06:30:09','2025-04-27 06:30:09','Activo'),('5bea6213-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jarvis20@gmail.com','',0,'','','','2025-04-27 06:30:09','2025-04-27 06:30:09','Activo'),('5c1d9cec-2362-11f0-b8d7-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','Tierra30@gmail.com','',0,'','','','2025-04-27 06:23:00','2025-04-27 06:23:00','Activo'),('5c6c8315-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lolita_Murazik@yahoo.com','',0,'','','','2025-04-27 06:30:10','2025-04-27 06:30:10','Activo'),('5ce8329a-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Emery.Little89@gmail.com','',0,'','','','2025-04-27 06:30:11','2025-04-27 06:30:11','Activo'),('5d6f3cf3-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jayne14@hotmail.com','',0,'','','','2025-04-27 06:30:12','2025-04-27 06:30:12','Activo'),('5dec21c0-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Laurence.Blanda@yahoo.com','',0,'','','','2025-04-27 06:30:13','2025-04-27 06:30:13','Activo'),('5e6c331c-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Winona_Kling1@yahoo.com','',0,'','','','2025-04-27 06:30:14','2025-04-27 06:30:14','Activo'),('5ed17769-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Leanna_Dickens@yahoo.com','',0,'','','','2025-04-27 06:30:14','2025-04-27 06:30:14','Activo'),('5f391379-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Modesta_Koch@hotmail.com','',0,'','','','2025-04-27 06:30:15','2025-04-27 06:30:15','Activo'),('5f9bf1f1-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Clara_Schinner81@yahoo.com','',0,'','','','2025-04-27 06:30:16','2025-04-27 06:30:16','Activo'),('5fddb446-2362-11f0-b8d7-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','Danielle_Sawayn44@hotmail.com','',0,'','','','2025-04-27 06:23:07','2025-04-27 06:23:07','Activo'),('5ff25e84-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Donna37@yahoo.com','',0,'','','','2025-04-27 06:30:16','2025-04-27 06:30:16','Activo'),('6072e6dc-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lavonne.Mitchell@yahoo.com','',0,'','','','2025-04-27 06:30:17','2025-04-27 06:30:17','Activo'),('6080d31e-2362-11f0-b8d7-d843ae0db894','608051ee-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Brisa_Brekke@yahoo.com','',0,'','','','2025-04-27 06:23:08','2025-04-27 06:23:08','Activo'),('60ca32a3-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Clair_Marvin@gmail.com','',0,'','','','2025-04-27 06:30:18','2025-04-27 06:30:18','Activo'),('610806b1-2362-11f0-b8d7-d843ae0db894','608051ee-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Penelope93@gmail.com','',0,'','','','2025-04-27 06:23:09','2025-04-27 06:23:09','Activo'),('6144618d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Damian_Dooley@hotmail.com','',0,'','','','2025-04-27 06:30:18','2025-04-27 06:30:18','Activo'),('618435bf-2362-11f0-b8d7-d843ae0db894','6183a5a9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Birdie22@gmail.com','',0,'','','','2025-04-27 06:23:09','2025-04-27 06:23:09','Activo'),('61b66a82-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Ole_Stracke13@yahoo.com','',0,'','','','2025-04-27 06:30:19','2025-04-27 06:30:19','Activo'),('61ff7791-2362-11f0-b8d7-d843ae0db894','6183a5a9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lina.Bogan@gmail.com','',0,'','','','2025-04-27 06:23:10','2025-04-27 06:23:10','Activo'),('622137fd-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lyric_Dooley@hotmail.com','',0,'','','','2025-04-27 06:30:20','2025-04-27 06:30:20','Activo'),('625a41e1-2362-11f0-b8d7-d843ae0db894','6183a5a9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Morton_Bartoletti@hotmail.com','',0,'','','','2025-04-27 06:23:11','2025-04-27 06:23:11','Activo'),('629c9a0c-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Steve_Langworth91@yahoo.com','',0,'','','','2025-04-27 06:30:21','2025-04-27 06:30:21','Activo'),('62bb3db4-0898-11f0-ae9f-d843ae0db894','28137808-0898-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','alguienexample2@gmail.com','',0,'','','','2025-03-24 04:11:43','2025-03-24 04:11:43','Activo'),('62c5b643-2362-11f0-b8d7-d843ae0db894','6183a5a9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Brannon.Botsford@hotmail.com','',0,'','','','2025-04-27 06:23:11','2025-04-27 06:23:11','Activo'),('6328402c-2362-11f0-b8d7-d843ae0db894','6183a5a9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Grayson_Powlowski13@yahoo.com','',0,'','','','2025-04-27 06:23:12','2025-04-27 06:23:12','Activo'),('63417d1d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Camilla32@hotmail.com','',0,'','','','2025-04-27 06:30:22','2025-04-27 06:30:22','Activo'),('63881ef1-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Anibal62@yahoo.com','',0,'','','','2025-04-27 06:23:13','2025-04-27 06:23:13','Activo'),('63dca5ad-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Emmalee_Feest11@gmail.com','',0,'','','','2025-04-27 06:30:23','2025-04-27 06:30:23','Activo'),('63df532f-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Clinton10@hotmail.com','',0,'','','','2025-04-27 06:23:13','2025-04-27 06:23:13','Activo'),('643a6454-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Gennaro_Erdman@gmail.com','',0,'','','','2025-04-27 06:23:14','2025-04-27 06:23:14','Activo'),('6482eac1-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jimmy_Hirthe35@hotmail.com','',0,'','','','2025-04-27 06:30:24','2025-04-27 06:30:24','Activo'),('64959d8b-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Antonina_Denesik@gmail.com','',0,'','','','2025-04-27 06:23:14','2025-04-27 06:23:14','Activo'),('64e27359-0561-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba3@gmail.com','',0,'','','','2025-03-20 02:00:31','2025-03-20 02:00:31','Activo'),('6514860c-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Hudson_Weimann58@yahoo.com','',0,'','','','2025-04-27 06:23:15','2025-04-27 06:23:15','Activo'),('65157251-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Esta.Roob35@hotmail.com','',0,'','','','2025-04-27 06:30:25','2025-04-27 06:30:25','Activo'),('6562fb76-2362-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Maverick99@yahoo.com','',0,'','','','2025-04-27 06:23:16','2025-04-27 06:23:16','Activo'),('65c94556-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Anna53@hotmail.com','',0,'','','','2025-04-27 06:30:26','2025-04-27 06:30:26','Activo'),('664ba41c-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lavern.Cartwright@gmail.com','',0,'','','','2025-04-27 06:30:27','2025-04-27 06:30:27','Activo'),('66c1bc2d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jameson18@yahoo.com','',0,'','','','2025-04-27 06:30:28','2025-04-27 06:30:28','Activo'),('678a5ff4-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Sandy.Ondricka@yahoo.com','',0,'','','','2025-04-27 06:30:29','2025-04-27 06:30:29','Activo'),('682a50e1-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Dessie66@hotmail.com','',0,'','','','2025-04-27 06:30:30','2025-04-27 06:30:30','Activo'),('68b2433d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Tina.Jacobs83@gmail.com','',0,'','','','2025-04-27 06:30:31','2025-04-27 06:30:31','Activo'),('6921466a-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lina50@hotmail.com','',0,'','','','2025-04-27 06:30:32','2025-04-27 06:30:32','Activo'),('6955b304-089c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:40:32','2025-03-24 04:40:32','Activo'),('6982f122-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Kristoffer_Stiedemann87@hotmail.com','',0,'','','','2025-04-27 06:30:32','2025-04-27 06:30:32','Activo'),('69b12989-0afa-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','Jazmin@gmail.com','',0,'','','','2025-03-27 04:58:27','2025-03-27 04:58:27','Activo'),('69e77298-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Candelario_Hickle84@yahoo.com','',0,'','','','2025-04-27 06:30:33','2025-04-27 06:30:33','Activo'),('6a4abd54-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Watson_Hoppe58@yahoo.com','',0,'','','','2025-04-27 06:30:34','2025-04-27 06:30:34','Activo'),('6ab081ea-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Katelyn_Schmeler59@hotmail.com','',0,'','','','2025-04-27 06:30:34','2025-04-27 06:30:34','Activo'),('6b145b73-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Quinton_Hills87@yahoo.com','',0,'','','','2025-04-27 06:30:35','2025-04-27 06:30:35','Activo'),('6b655876-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Xavier54@yahoo.com','',0,'','','','2025-04-27 06:30:35','2025-04-27 06:30:35','Activo'),('6d1fc592-2361-11f0-b8d7-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-04-27 06:16:19','2025-04-27 06:16:19','Activo'),('6d9e661a-08a2-11f0-ae9f-d843ae0db894','663b2f2a-08a2-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 05:23:36','2025-03-24 05:23:36','Activo'),('70552a06-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Dario49@yahoo.com','',0,'','','','2025-04-27 06:37:53','2025-04-27 06:37:53','Activo'),('7086e9f9-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:26:25','2025-03-24 04:26:25','Activo'),('70f10f34-055f-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba@prueba.gmail','',0,'','','','2025-03-20 01:46:32','2025-03-20 01:46:32','Activo'),('710c7a97-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Madelynn.Conn35@yahoo.com','',0,'','','','2025-04-27 06:37:54','2025-04-27 06:37:54','Activo'),('715f6ff6-0afa-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','gerardo@gmail.com','',0,'','','','2025-03-27 04:58:40','2025-03-27 04:58:40','Activo'),('71f55816-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Alfonso.Paucek56@yahoo.com','',0,'','','','2025-04-27 06:37:56','2025-04-27 06:37:56','Activo'),('793e03a7-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','laura@gmail.com','',0,'','','','2025-03-24 05:02:27','2025-03-24 05:02:27','Activo'),('796d540a-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Elsa_Cartwright@gmail.com','',0,'','','','2025-04-27 06:38:08','2025-04-27 06:38:08','Activo'),('79fd8a60-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aline@gmail.com','',0,'','','','2025-03-27 04:58:55','2025-03-27 04:58:55','Activo'),('7acc97b9-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Walton99@hotmail.com','',0,'','','','2025-04-27 06:38:11','2025-04-27 06:38:11','Activo'),('7c3f0f7b-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Alf_Kihn31@hotmail.com','',0,'','','','2025-04-27 06:38:13','2025-04-27 06:38:13','Activo'),('7da8605f-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Liliane22@hotmail.com','',0,'','','','2025-04-27 06:38:16','2025-04-27 06:38:16','Activo'),('7e34315b-2364-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Joel_Cronin@yahoo.com','',0,'','','','2025-04-27 06:38:16','2025-04-27 06:38:16','Activo'),('7ed10cbc-2029-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','theweekend@gmail.com','',0,'','','','2025-04-23 03:58:24','2025-04-23 03:58:24','Activo'),('7f53222a-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','ingrid@gmail.com','',0,'','','','2025-03-27 04:59:04','2025-03-27 04:59:04','Activo'),('8082446e-0925-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','stef@gmail.com','',0,'','','','2025-03-24 21:01:52','2025-03-24 21:01:52','Activo'),('811fd76f-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','zapata@gmail.com','',0,'','','','2025-03-24 05:02:40','2025-03-24 05:02:40','Activo'),('83bf9039-20b2-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','katherine24124@outlook.com','',0,'','','','2025-04-23 20:19:13','2025-04-23 20:19:13','Activo'),('8530b3b1-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fatima@gmail.com','',0,'','','','2025-03-27 04:59:14','2025-03-27 04:59:14','Activo'),('85382ce9-089b-11f0-ae9f-d843ae0db894','7254c2a1-089b-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:34:09','2025-03-24 04:34:09','Activo'),('88bc1d4f-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fabiola@','',0,'','','','2025-03-24 05:02:53','2025-03-24 05:02:53','Activo'),('89bb11bc-0912-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jj@gmail.com','',0,'','','','2025-03-24 18:46:07','2025-03-24 18:46:07','Activo'),('8a67e692-1d0f-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','kevin@gmail.com','',0,'','','','2025-04-19 05:15:03','2025-04-19 05:15:03','Activo'),('8d165148-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','jesus@gmail.com','',0,'','','','2025-03-27 04:59:27','2025-03-27 04:59:27','Activo'),('8ec7eee0-2031-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','aurora@prueba.com','',0,'','','','2025-04-23 04:56:06','2025-04-23 04:56:06','Activo'),('93aefe1a-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Wayne18@yahoo.com','',0,'','','','2025-04-27 06:31:43','2025-04-27 06:31:43','Activo'),('93ff8503-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:27:24','2025-03-24 04:27:24','Activo'),('9435823d-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Annamae28@gmail.com','',0,'','','','2025-04-27 06:31:44','2025-04-27 06:31:44','Activo'),('946e2a49-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','sdas','',0,'','','','2025-03-24 05:03:13','2025-03-24 05:03:13','Activo'),('949fa962-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Lucile.Lockman@yahoo.com','',0,'','','','2025-04-27 06:31:45','2025-04-27 06:31:45','Activo'),('94fc81c2-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Dayna70@gmail.com','',0,'','','','2025-04-27 06:31:45','2025-04-27 06:31:45','Activo'),('95521e13-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jon_Miller@yahoo.com','',0,'','','','2025-04-27 06:31:46','2025-04-27 06:31:46','Activo'),('95e7d0ec-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Tiffany.Stroman85@gmail.com','',0,'','','','2025-04-27 06:31:47','2025-04-27 06:31:47','Activo'),('96438e26-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Vaughn.Johnson@yahoo.com','',0,'','','','2025-04-27 06:31:47','2025-04-27 06:31:47','Activo'),('96c43277-2363-11f0-b8d7-d843ae0db894','63870fe9-2362-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Bradly94@hotmail.com','',0,'','','','2025-04-27 06:31:48','2025-04-27 06:31:48','Activo'),('971ec289-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pablo@gmail.com','',0,'','','','2025-03-27 04:59:44','2025-03-27 04:59:44','Activo'),('9721c218-2363-11f0-b8d7-d843ae0db894','9720cb59-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Andre.Hahn68@hotmail.com','',0,'','','','2025-04-27 06:31:49','2025-04-27 06:31:49','Activo'),('977ae560-2363-11f0-b8d7-d843ae0db894','9720cb59-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Florida97@gmail.com','',0,'','','','2025-04-27 06:31:49','2025-04-27 06:31:49','Activo'),('97ff1c3b-2363-11f0-b8d7-d843ae0db894','9720cb59-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Marianne4@gmail.com','',0,'','','','2025-04-27 06:31:50','2025-04-27 06:31:50','Activo'),('985c2130-2363-11f0-b8d7-d843ae0db894','9720cb59-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jordon21@gmail.com','',0,'','','','2025-04-27 06:31:51','2025-04-27 06:31:51','Activo'),('98b0c7d9-2363-11f0-b8d7-d843ae0db894','9720cb59-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Franco.Wunsch@gmail.com','',0,'','','','2025-04-27 06:31:51','2025-04-27 06:31:51','Activo'),('9945519f-2363-11f0-b8d7-d843ae0db894','99446667-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Alphonso.Kautzer93@yahoo.com','',0,'','','','2025-04-27 06:31:52','2025-04-27 06:31:52','Activo'),('9aa4189b-089c-11f0-ae9f-d843ae0db894','80832c12-089c-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:41:55','2025-03-24 04:41:55','Activo'),('9ba8f048-2363-11f0-b8d7-d843ae0db894','99446667-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Christine86@yahoo.com','',0,'','','','2025-04-27 06:31:56','2025-04-27 06:31:56','Activo'),('a0c90818-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aritzel@gmail.com','',0,'','','','2025-03-27 05:00:00','2025-03-27 05:00:00','Activo'),('a260125b-0af6-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-27 04:31:25','2025-03-27 04:31:25','Activo'),('a47db9ec-2363-11f0-b8d7-d843ae0db894','99446667-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Bertrand78@gmail.com','',0,'','','','2025-04-27 06:32:11','2025-04-27 06:32:11','Activo'),('a79f6303-0b70-11f0-ae9f-d843ae0db894','a0c850f2-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','aurora@gmail.com','',0,'','','','2025-03-27 19:04:52','2025-03-27 19:04:52','Activo'),('a83eddb4-0898-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:13:39','2025-03-24 04:13:39','Activo'),('a93423ab-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','fabiola@gmail.com','',0,'','','','2025-03-24 05:03:48','2025-03-24 05:03:48','Activo'),('aa49d41c-975e-11ef-a763-00e04c360195','bcd3df3c-8157-11ef-a62a-00e04c360195','Erick Miguel','Gonzalez Rivera','2000-12-29','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',30,'Primero','B','15EJN0089P','E30','Matutino','GORE001229HMCNVRB3','muke7881891@gmail.com','5511909105',23,'Calle Estrella, 123, Colonia Centro, CDMX','Carmen Rivera Cornejo','5512345678','2024-10-31 02:03:51','2024-10-31 02:03:51','Activo'),('aaebe059-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','valeria@gmail.com','',0,'','','','2025-03-27 05:00:17','2025-03-27 05:00:17','Activo'),('aefdd8a4-2363-11f0-b8d7-d843ae0db894','99446667-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Zoila_Von@yahoo.com','',0,'','','','2025-04-27 06:32:29','2025-04-27 06:32:29','Activo'),('af83631a-2363-11f0-b8d7-d843ae0db894','99446667-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Gia44@hotmail.com','',0,'','','','2025-04-27 06:32:30','2025-04-27 06:32:30','Activo'),('b050d684-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Abigail.Boyer@hotmail.com','',0,'','','','2025-04-27 06:32:31','2025-04-27 06:32:31','Activo'),('b09a3498-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','pepe@gmail.com','',0,'','','','2025-03-24 05:04:00','2025-03-24 05:04:00','Activo'),('b1bee820-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','lucy@gmail.com','',0,'','','','2025-03-27 05:00:28','2025-03-27 05:00:28','Activo'),('b1d3b708-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Charity.Harris@yahoo.com','',0,'','','','2025-04-27 06:32:34','2025-04-27 06:32:34','Activo'),('b26d8959-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Elenora_Emmerich@yahoo.com','',0,'','','','2025-04-27 06:32:35','2025-04-27 06:32:35','Activo'),('b2798292-0896-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','carmenrcogato@gmail.com','',0,'','','','2025-03-24 03:59:38','2025-03-24 03:59:38','Activo'),('b2e21a6b-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Ulices.Toy18@hotmail.com','',0,'','','','2025-04-27 06:32:35','2025-04-27 06:32:35','Activo'),('b34be4c1-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Daphne_Runte78@gmail.com','',0,'','','','2025-04-27 06:32:36','2025-04-27 06:32:36','Activo'),('b3c2a083-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Telly10@yahoo.com','',0,'','','','2025-04-27 06:32:37','2025-04-27 06:32:37','Activo'),('b4e9df7b-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Mitchell.Lebsack45@hotmail.com','',0,'','','','2025-04-27 06:32:39','2025-04-27 06:32:39','Activo'),('b5d1a86b-091b-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 19:51:46','2025-03-24 19:51:46','Activo'),('b661c642-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Dereck.DAmore@hotmail.com','',0,'','','','2025-04-27 06:32:41','2025-04-27 06:32:41','Activo'),('b89ee7cd-0ae7-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','yallegaronlaspipshas@gmail.com','',0,'','','','2025-03-27 02:44:39','2025-03-27 02:44:39','Activo'),('be28fc03-0ad0-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','ise@gmail.com','',0,'','','','2025-03-27 00:00:10','2025-03-27 00:00:10','Activo'),('be63d910-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','agustin@prueba.com','',0,'','','','2025-04-15 03:26:43','2025-04-15 03:26:43','Activo'),('be9e7bf6-089f-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','monserrat@gmail.com','',0,'','','','2025-03-24 05:04:23','2025-03-24 05:04:23','Activo'),('c2a5665c-2360-11f0-b8d7-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba2@gmail.com','',0,'','','','2025-04-27 06:11:33','2025-04-27 06:11:33','Activo'),('c3cdf816-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:21:35','2025-03-24 04:21:35','Activo'),('c5b76809-224e-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','david@gmail.com','',0,'','','','2025-04-25 21:30:16','2025-04-25 21:30:16','Activo'),('c69d2e81-2029-11f0-b8d7-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','dualipa@gmail.com','',0,'','','','2025-04-23 04:00:24','2025-04-23 04:00:24','Activo'),('cb0bbe17-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','carolina@pruebas.com','',0,'','','','2025-04-15 03:27:04','2025-04-15 03:27:04','Activo'),('cd1cd3a5-0899-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','uli80@gmail.com','',0,'','','','2025-03-24 04:21:51','2025-03-24 04:21:51','Activo'),('d176c3b6-86c5-11ef-8a8b-00e04c360195','d175c2f1-86c5-11ef-8a8b-00e04c360195','Erick Miguel','','2000-12-29','','',0,'','','','','','','','',0,'','','','2024-10-09 23:09:25','2024-10-31 02:12:43','Activo'),('d17851a7-86b3-11ef-8a8b-00e04c360195','d1773f12-86b3-11ef-8a8b-00e04c360195','Daires','Gonzalez Rivera','2009-09-25','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',0,'','','','','','','daires2509@gmail.com','',0,'','','','2024-10-09 21:00:34','2024-10-22 01:47:18','Activo'),('d2652515-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','juan@gmail.com','',0,'','','','2025-03-27 05:01:23','2025-03-27 05:01:23','Activo'),('d2765d9a-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','esteban@pruebas.com','',0,'','','','2025-04-15 03:27:16','2025-04-15 03:27:16','Activo'),('d2e642e4-089c-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:43:29','2025-03-24 04:43:29','Activo'),('dac4203b-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','irvein@gmail.com','',0,'','','','2025-03-27 05:01:37','2025-03-27 05:01:37','Activo'),('dc570719-089a-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:29:26','2025-03-24 04:29:26','Activo'),('e282f45c-0896-11f0-ae9f-d843ae0db894','b27813e6-0896-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','example@gmail.com','',0,'','','','2025-03-24 04:00:58','2025-03-24 04:00:58','Activo'),('e471f5dd-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','kevin@prueba.com','',0,'','','','2025-04-15 03:27:46','2025-04-15 03:27:46','Activo'),('ee32d1ac-0afa-11f0-ae9f-d843ae0db894','79fcd89c-0afa-11f0-ae9f-d843ae0db894','','',NULL,'','',0,'','','','','','','emmanuel@gmail.com','',0,'','','','2025-03-27 05:02:10','2025-03-27 05:02:10','Activo'),('ee55ab7f-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jackson_Schroeder7@gmail.com','',0,'','','','2025-04-27 06:34:15','2025-04-27 06:34:15','Activo'),('efc1645e-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Avery97@gmail.com','',0,'','','','2025-04-27 06:34:17','2025-04-27 06:34:17','Activo'),('f007aad2-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','carina@pruebas.com','',0,'','','','2025-04-15 03:28:06','2025-04-15 03:28:06','Activo'),('f07f7b10-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Haskell.Brakus@yahoo.com','',0,'','','','2025-04-27 06:34:19','2025-04-27 06:34:19','Activo'),('f0bf974d-8167-11ef-a62a-00e04c360195','b6b4d5ff-8167-11ef-a62a-00e04c360195','Erick Miguel','Gonzalez Rivera','2000-12-29','Jardin de niños Estrellitas','Licenciatura en Educación Preescolar',30,'Primero','B','15EJN0089P','E30','Matutino','GORE001229HMCNVRB3','muke7881@gmail.com','5511909105',24,'Calle Estrella, 123, Colonia Centro, CDMX','Carmen Rivera Cornejo','5512345678','2024-10-03 03:14:49','2024-10-22 01:47:18','Activo'),('f11da057-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Kayli_Kautzer93@hotmail.com','',0,'','','','2025-04-27 06:34:20','2025-04-27 06:34:20','Activo'),('f1b39d8c-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Walter_Walsh16@hotmail.com','',0,'','','','2025-04-27 06:34:21','2025-04-27 06:34:21','Activo'),('f24cf7bd-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Jaiden.Baumbach@hotmail.com','',0,'','','','2025-04-27 06:34:22','2025-04-27 06:34:22','Activo'),('f2cc39aa-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Christy21@yahoo.com','',0,'','','','2025-04-27 06:34:23','2025-04-27 06:34:23','Activo'),('f353d6ef-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Ethan.Treutel19@hotmail.com','',0,'','','','2025-04-27 06:34:23','2025-04-27 06:34:23','Activo'),('f3e3861b-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Virginie_Rutherford96@gmail.com','',0,'','','','2025-04-27 06:34:24','2025-04-27 06:34:24','Activo'),('f45f8ca2-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Oda.Stoltenberg@yahoo.com','',0,'','','','2025-04-27 06:34:25','2025-04-27 06:34:25','Activo'),('f4eaac51-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Bethany52@yahoo.com','',0,'','','','2025-04-27 06:34:26','2025-04-27 06:34:26','Activo'),('f58cb43f-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Rusty_Botsford20@gmail.com','',0,'','','','2025-04-27 06:34:27','2025-04-27 06:34:27','Activo'),('f6207dc0-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Stan_Zboncak80@gmail.com','',0,'','','','2025-04-27 06:34:28','2025-04-27 06:34:28','Activo'),('f6c03274-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Kaley_Schaden35@yahoo.com','',0,'','','','2025-04-27 06:34:29','2025-04-27 06:34:29','Activo'),('f7546ad9-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Judd94@yahoo.com','',0,'','','','2025-04-27 06:34:30','2025-04-27 06:34:30','Activo'),('fa6fc749-055f-11f0-ae9f-d843ae0db894','d1773f12-86b3-11ef-8a8b-00e04c360195','','',NULL,'','',0,'','','','','','','prueba2@gmail.com','',0,'','','','2025-03-20 01:50:23','2025-03-20 01:50:23','Activo'),('fc57a6e1-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Kenyon.Hackett@yahoo.com','',0,'','','','2025-04-27 06:34:39','2025-04-27 06:34:39','Activo'),('fd2946b5-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Armando58@hotmail.com','',0,'','','','2025-04-27 06:34:40','2025-04-27 06:34:40','Activo'),('fdc21c46-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Cassandre.Pfeffer16@hotmail.com','',0,'','','','2025-04-27 06:34:41','2025-04-27 06:34:41','Activo'),('fe1ea1ed-19db-11f0-b816-d843ae0db894','be5c7e66-19db-11f0-b816-d843ae0db894','','',NULL,'','',0,'','','','','','','daniel@pruebas.com','',0,'','','','2025-04-15 03:28:30','2025-04-15 03:28:30','Activo'),('fe3f56ad-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Stone19@yahoo.com','',0,'','','','2025-04-27 06:34:42','2025-04-27 06:34:42','Activo'),('fedfeb6b-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Stanford32@yahoo.com','',0,'','','','2025-04-27 06:34:43','2025-04-27 06:34:43','Activo'),('ff76ca2e-2363-11f0-b8d7-d843ae0db894','b04f00e2-2363-11f0-b8d7-d843ae0db894','','',NULL,'','',0,'','','','','','','Dallas.Walker35@gmail.com','',0,'','','','2025-04-27 06:34:44','2025-04-27 06:34:44','Activo');
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
  `AccountStatus` varchar(20) DEFAULT NULL,
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
INSERT INTO `users` VALUES ('22aed6ed-2672-11f0-b8d7-d843ae0db894','Maria Jose','petite.mary05@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$5CYlSdtmYStVfMslJEjhGA$GR8L/jsQ7+bWCnAahfdYhSZgZghV3MtRbmPOhnBFcZc','https://i.pinimg.com/736x/da/f3/fb/daf3fb981e228220e901682c55cc4279.jpg','admin','normal','2025-05-03 01:12:33','Activo','2025-05-01 03:53:29','2025-05-03 01:12:33'),('4383b114-2672-11f0-b8d7-d843ae0db894','Erick Gonzalez','muke7881@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$i6/+Dy19bc0blhSPNBbblA$G1pEJwKvmKta/kWoBjA2RKq4nJziHWFoyeIzfIjwgSM','https://i.pinimg.com/736x/13/94/a2/1394a25342955f0613ba77a39947660f.jpg','admin','normal',NULL,'Activo','2025-05-01 03:54:24','2025-05-01 04:44:45'),('4901398e-2672-11f0-b8d7-d843ae0db894','La pecas','daires2509@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$6OEeekkqvWuH6uphtkhMOw$apnuGGanVEkJogIDnWqyViYgLgjKPt3iIRMw+t9JImw','https://i.pinimg.com/736x/3b/33/49/3b3349005040b9b6493ae10bbe04ab20.jpg','admin','normal',NULL,'Activo','2025-05-01 03:54:34','2025-05-01 04:44:45'),('d6f36106-267e-11f0-b8d7-d843ae0db894','Prueba3','alguienexample@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$RwjWra5+4xtictXnWFsJlw$4ltrPcN++a+yNsSJF6uzbHv4lBt6t4y0Z5kf6GjoR9A',NULL,'user','normal',NULL,'Activo','2025-05-01 05:24:26','2025-05-01 06:20:10');
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

-- Dump completed on 2025-05-03  1:25:58
