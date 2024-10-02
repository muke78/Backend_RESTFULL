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
  `Status` varchar(20) DEFAULT 'active',
  `LastMaintenanceDate` date DEFAULT NULL,
  `WarrantyEndDate` date DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `Weight` decimal(10,2) DEFAULT NULL,
  `Dimensions` varchar(50) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Condition` varchar(20) DEFAULT NULL,
  `PurchaseDate` date DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `Status` varchar(20) DEFAULT 'Active',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `Status` int DEFAULT '5',
  PRIMARY KEY (`ID`,`TeacherID`),
  KEY `TeacherID` (`TeacherID`),
  CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`TeacherID`) REFERENCES `teachers` (`TeacherID`),
  CONSTRAINT `parents_ibfk_2` FOREIGN KEY (`TeacherID`) REFERENCES `teachers` (`TeacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `NameStudent` varchar(100) NOT NULL,
  `Grade` varchar(50) NOT NULL,
  `Group` varchar(10) NOT NULL,
  `Average` decimal(5,2) DEFAULT NULL,
  `AgeStudent` int NOT NULL,
  `Curp` varchar(20) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `NameOfMom` varchar(100) NOT NULL,
  `NameOfDad` varchar(100) NOT NULL,
  `EmergencyContact` varchar(100) NOT NULL,
  `EmergencyPhone` varchar(15) NOT NULL,
  `Allergies` varchar(255) NOT NULL,
  `MedicalConditions` varchar(255) NOT NULL,
  `EnrollmentDate` date NOT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` int DEFAULT '5',
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
  `Phone` bigint NOT NULL,
  `Age` int NOT NULL,
  `Address` varchar(255) NOT NULL,
  `EmergencyContact` varchar(100) NOT NULL,
  `EmergencyPhone` varchar(15) NOT NULL,
  `Created` datetime DEFAULT (now()),
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Status` int DEFAULT '5',
  PRIMARY KEY (`ID`,`TeacherID`),
  KEY `TeacherID` (`TeacherID`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`TeacherID`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  KEY `UserID` (`UserID`),
  KEY `PermitID` (`PermitID`),
  CONSTRAINT `user_permissions_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`ID`),
  CONSTRAINT `user_permissions_ibfk_2` FOREIGN KEY (`PermitID`) REFERENCES `permissions` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `Password` char(150) NOT NULL,
  `Role` varchar(50) DEFAULT NULL,
  `LastLogin` datetime DEFAULT NULL,
  `AccountStatus` varchar(20) DEFAULT 'Active',
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-02  0:31:47
