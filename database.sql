-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: akt_backend_mirror
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
  `actions_id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`actions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actions`
--

/*!40000 ALTER TABLE `actions` DISABLE KEYS */;
/*!40000 ALTER TABLE `actions` ENABLE KEYS */;

--
-- Table structure for table `asset_conditions`
--

DROP TABLE IF EXISTS `asset_conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset_conditions` (
  `condition_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`condition_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset_conditions`
--

/*!40000 ALTER TABLE `asset_conditions` DISABLE KEYS */;
INSERT INTO `asset_conditions` VALUES ('ca5af1d5-61fb-11f0-a977-d843ae0db894','Nuevo','Activo sin uso previo, en condiciones óptimas de fábrica'),('ca5b271a-61fb-11f0-a977-d843ae0db894','Usado','Activo con uso previo, pero en buen estado funcional'),('ca5b2dc5-61fb-11f0-a977-d843ae0db894','Reacondicionado','Activo restaurado o reparado para volver a usarse'),('ca5b3001-61fb-11f0-a977-d843ae0db894','Dañado','Activo con fallas que afectan parcial o totalmente su funcionamiento'),('ca5b31ef-61fb-11f0-a977-d843ae0db894','Obsoleto','Activo funcional pero fuera de uso por antigüedad o falta de soporte'),('ca5b33c2-61fb-11f0-a977-d843ae0db894','Extraviado','Activo perdido y no disponible físicamente'),('ca5b357f-61fb-11f0-a977-d843ae0db894','Robado','Activo no recuperado por hurto'),('ca5b3fa8-61fb-11f0-a977-d843ae0db894','En reparación','Activo fuera de servicio por mantenimiento o reparación'),('ca5b4372-61fb-11f0-a977-d843ae0db894','Descompuesto','Activo que no funciona y está pendiente de revisión'),('ca5b4524-61fb-11f0-a977-d843ae0db894','De baja','Activo oficialmente dado de baja del inventario');
/*!40000 ALTER TABLE `asset_conditions` ENABLE KEYS */;

--
-- Table structure for table `cat_assets`
--

DROP TABLE IF EXISTS `cat_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_assets` (
  `assets_id` char(36) NOT NULL,
  `condition_id` char(36) NOT NULL,
  `location_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT '0.00',
  `last_maintenance_date` date DEFAULT NULL,
  `warranty_end_date` date DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`assets_id`),
  KEY `cat_assets_ibfk1_idx` (`condition_id`),
  KEY `cat_assets_ibfk2_idx` (`location_id`),
  KEY `cat_assets_ibfk3_idx` (`status_id`),
  CONSTRAINT `cat_assets_ibfk1` FOREIGN KEY (`condition_id`) REFERENCES `asset_conditions` (`condition_id`),
  CONSTRAINT `cat_assets_ibfk2` FOREIGN KEY (`location_id`) REFERENCES `cat_classrooms` (`location_id`),
  CONSTRAINT `cat_assets_ibfk3` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_assets`
--

/*!40000 ALTER TABLE `cat_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_assets` ENABLE KEYS */;

--
-- Table structure for table `cat_classrooms`
--

DROP TABLE IF EXISTS `cat_classrooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_classrooms` (
  `location_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `room_type` varchar(50) NOT NULL,
  `capacity` int DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_classrooms`
--

/*!40000 ALTER TABLE `cat_classrooms` DISABLE KEYS */;
INSERT INTO `cat_classrooms` VALUES ('8b89c363-61f6-11f0-a977-d843ae0db894','Aula 1','Aula',31),('8b89f0d3-61f6-11f0-a977-d843ae0db894','Aula 2','Aula',31),('8b89f6ce-61f6-11f0-a977-d843ae0db894','Aula 3','Aula',31),('8b89f878-61f6-11f0-a977-d843ae0db894','Aula 4','Aula',31),('8b89f9f3-61f6-11f0-a977-d843ae0db894','Aula 5','Aula',31),('8b89fb52-61f6-11f0-a977-d843ae0db894','Aula 6','Aula',31),('8b89fcc2-61f6-11f0-a977-d843ae0db894','Aula 7','Aula',31),('8b89fe39-61f6-11f0-a977-d843ae0db894','Dirección','Oficina',7),('8b8a0011-61f6-11f0-a977-d843ae0db894','Comedor','Área común',45),('8b8a016d-61f6-11f0-a977-d843ae0db894','Bodega 1','Almacén',3),('8b8a02c3-61f6-11f0-a977-d843ae0db894','Bodega 2','Almacén',3);
/*!40000 ALTER TABLE `cat_classrooms` ENABLE KEYS */;

--
-- Table structure for table `cat_educational_level`
--

DROP TABLE IF EXISTS `cat_educational_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_educational_level` (
  `level_education_id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`level_education_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_educational_level`
--

/*!40000 ALTER TABLE `cat_educational_level` DISABLE KEYS */;
INSERT INTO `cat_educational_level` VALUES ('db6c40cd-61f6-11f0-a977-d843ae0db894','Primaria trunca','Prim. trunca'),('db6c51d7-61f6-11f0-a977-d843ae0db894','Primaria terminada','Primaria'),('db6c553a-61f6-11f0-a977-d843ae0db894','Secundaria trunca','Sec. trunca'),('db6c5662-61f6-11f0-a977-d843ae0db894','Secundaria terminada','Secundaria'),('db6c5766-61f6-11f0-a977-d843ae0db894','Preparatoria o bachillerato trunco','Prepa trunca'),('db6c587c-61f6-11f0-a977-d843ae0db894','Preparatoria o bachillerato terminado','Preparatoria'),('db6c5973-61f6-11f0-a977-d843ae0db894','Carrera técnica','Técnica'),('db6c5a59-61f6-11f0-a977-d843ae0db894','Carrera técnica con preparatoria','Técnica + Prepa'),('db6c5bb7-61f6-11f0-a977-d843ae0db894','Licenciatura trunca','Lic. trunca'),('db6c5ca7-61f6-11f0-a977-d843ae0db894','Licenciatura terminada','Licenciatura'),('db6c5d8f-61f6-11f0-a977-d843ae0db894','Ingeniería trunca','Ing. trunca'),('db6c5e89-61f6-11f0-a977-d843ae0db894','Ingeniería terminada','Ingeniería'),('db6c5f81-61f6-11f0-a977-d843ae0db894','Especialidad','Especialidad'),('db6c65e2-61f6-11f0-a977-d843ae0db894','Maestría trunca','Mtra. trunca'),('db6c6ba6-61f6-11f0-a977-d843ae0db894','Maestría terminada','Maestría'),('db6c6d12-61f6-11f0-a977-d843ae0db894','Doctorado trunco','Dr. trunco'),('db6c6e1d-61f6-11f0-a977-d843ae0db894','Doctorado terminado','Doctorado'),('db6c6f26-61f6-11f0-a977-d843ae0db894','Sin estudios','Ninguno');
/*!40000 ALTER TABLE `cat_educational_level` ENABLE KEYS */;

--
-- Table structure for table `cat_gender`
--

DROP TABLE IF EXISTS `cat_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_gender` (
  `gender_id` char(36) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_gender`
--

/*!40000 ALTER TABLE `cat_gender` DISABLE KEYS */;
INSERT INTO `cat_gender` VALUES ('1ec5aff0-61fc-11f0-a977-d843ae0db894','Femenino'),('1ec5cc92-61fc-11f0-a977-d843ae0db894','Masculino'),('1ec5d235-61fc-11f0-a977-d843ae0db894','No binario'),('1ec5d430-61fc-11f0-a977-d843ae0db894','Prefiere no decirlo'),('1ec5d5f3-61fc-11f0-a977-d843ae0db894','Otro');
/*!40000 ALTER TABLE `cat_gender` ENABLE KEYS */;

--
-- Table structure for table `cat_inventory`
--

DROP TABLE IF EXISTS `cat_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_inventory` (
  `inventory_id` char(36) NOT NULL,
  `condition_id` char(36) NOT NULL,
  `location_id` char(36) NOT NULL,
  `item_code` varchar(50) NOT NULL,
  `serial_number` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `weight` decimal(10,2) DEFAULT NULL,
  `width` decimal(10,2) DEFAULT NULL,
  `height` decimal(10,2) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`inventory_id`),
  KEY `cat_inventory_ibfk_1_idx` (`condition_id`),
  KEY `cat_inventory_ibfk_2_idx` (`location_id`),
  KEY `cat_inventory_ibfk_3_idx` (`status_id`),
  CONSTRAINT `cat_inventory_ibfk_1` FOREIGN KEY (`condition_id`) REFERENCES `asset_conditions` (`condition_id`),
  CONSTRAINT `cat_inventory_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `cat_classrooms` (`location_id`),
  CONSTRAINT `cat_inventory_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_inventory`
--

/*!40000 ALTER TABLE `cat_inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_inventory` ENABLE KEYS */;

--
-- Table structure for table `cat_status`
--

DROP TABLE IF EXISTS `cat_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_status` (
  `status_id` char(36) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_status`
--

/*!40000 ALTER TABLE `cat_status` DISABLE KEYS */;
INSERT INTO `cat_status` VALUES ('cefd84f3-61f5-11f0-a977-d843ae0db894','Activo','Elemento disponible y en funcionamiento'),('cefdafcc-61f5-11f0-a977-d843ae0db894','Inactivo','Elemento deshabilitado temporalmente, no disponible para operaciones'),('cefdb1eb-61f5-11f0-a977-d843ae0db894','Pendiente','Elemento registrado pero en espera de aprobación o validación'),('cefdb257-61f5-11f0-a977-d843ae0db894','Suspendido','Elemento pausado por razones administrativas o de cumplimiento'),('cefdb296-61f5-11f0-a977-d843ae0db894','Eliminado','Elemento marcado como eliminado de forma lógica, no visible en operaciones comunes'),('cefdb2d4-61f5-11f0-a977-d843ae0db894','Archivado','Elemento guardado para referencia, no activo en operaciones actuales'),('cefdb314-61f5-11f0-a977-d843ae0db894','En revisión','Elemento en proceso de análisis o evaluación'),('cefdb376-61f5-11f0-a977-d843ae0db894','Aprobado','Elemento validado y aprobado para su uso'),('cefdb3fa-61f5-11f0-a977-d843ae0db894','Rechazado','Elemento revisado y no aprobado, requiere modificación o eliminación'),('cefdb461-61f5-11f0-a977-d843ae0db894','Bloqueado','Elemento restringido por razones de seguridad o políticas internas'),('cefdb4f2-61f5-11f0-a977-d843ae0db894','Caducado','Elemento ha superado su tiempo de validez o vigencia'),('cefdb547-61f5-11f0-a977-d843ae0db894','Completo','Elemento con todos sus procesos o tareas finalizados correctamente'),('cfcb73fd-61f5-11f0-a977-d843ae0db894','Activo','Elemento disponible y en funcionamiento'),('cfcb813a-61f5-11f0-a977-d843ae0db894','Inactivo','Elemento deshabilitado temporalmente, no disponible para operaciones'),('cfcb833b-61f5-11f0-a977-d843ae0db894','Pendiente','Elemento registrado pero en espera de aprobación o validación'),('cfcb84c8-61f5-11f0-a977-d843ae0db894','Suspendido','Elemento pausado por razones administrativas o de cumplimiento'),('cfcb863f-61f5-11f0-a977-d843ae0db894','Eliminado','Elemento marcado como eliminado de forma lógica, no visible en operaciones comunes'),('cfcb87c6-61f5-11f0-a977-d843ae0db894','Archivado','Elemento guardado para referencia, no activo en operaciones actuales'),('cfcb8915-61f5-11f0-a977-d843ae0db894','En revisión','Elemento en proceso de análisis o evaluación'),('cfcb8a95-61f5-11f0-a977-d843ae0db894','Aprobado','Elemento validado y aprobado para su uso'),('cfcb8be8-61f5-11f0-a977-d843ae0db894','Rechazado','Elemento revisado y no aprobado, requiere modificación o eliminación'),('cfcb8d35-61f5-11f0-a977-d843ae0db894','Bloqueado','Elemento restringido por razones de seguridad o políticas internas'),('cfcb8ec3-61f5-11f0-a977-d843ae0db894','Caducado','Elemento ha superado su tiempo de validez o vigencia'),('cfcb9010-61f5-11f0-a977-d843ae0db894','Completo','Elemento con todos sus procesos o tareas finalizados correctamente');
/*!40000 ALTER TABLE `cat_status` ENABLE KEYS */;

--
-- Table structure for table `cat_supplier`
--

DROP TABLE IF EXISTS `cat_supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_supplier` (
  `supplier_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_supplier`
--

/*!40000 ALTER TABLE `cat_supplier` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_supplier` ENABLE KEYS */;

--
-- Table structure for table `cat_supplies`
--

DROP TABLE IF EXISTS `cat_supplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_supplies` (
  `supplies_id` char(36) NOT NULL,
  `supplier_id` char(36) NOT NULL,
  `unit_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `purchase_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT '0.00',
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`supplies_id`),
  KEY `cat_supplies_ibfk_1_idx` (`supplier_id`),
  KEY `cat_supplies_ibfk_2_idx` (`unit_id`),
  KEY `cat_supplies_ibfk_3_idx` (`status_id`),
  CONSTRAINT `cat_supplies_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `cat_supplier` (`supplier_id`),
  CONSTRAINT `cat_supplies_ibfk_2` FOREIGN KEY (`unit_id`) REFERENCES `supply_units` (`unit_id`),
  CONSTRAINT `cat_supplies_ibfk_3` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_supplies`
--

/*!40000 ALTER TABLE `cat_supplies` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_supplies` ENABLE KEYS */;

--
-- Table structure for table `cat_work_shifts`
--

DROP TABLE IF EXISTS `cat_work_shifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_work_shifts` (
  `shifts_works_id` char(36) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`shifts_works_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_work_shifts`
--

/*!40000 ALTER TABLE `cat_work_shifts` DISABLE KEYS */;
INSERT INTO `cat_work_shifts` VALUES ('6fdcd8a4-61fc-11f0-a977-d843ae0db894','Matutino'),('6fdce875-61fc-11f0-a977-d843ae0db894','Vespertino');
/*!40000 ALTER TABLE `cat_work_shifts` ENABLE KEYS */;

--
-- Table structure for table `diagnostic`
--

DROP TABLE IF EXISTS `diagnostic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnostic` (
  `diagnostic_id` char(36) NOT NULL,
  `student_id` char(36) NOT NULL,
  `teacher_id` char(36) NOT NULL,
  `grade_group_id` char(36) NOT NULL,
  `level_education_id` char(36) NOT NULL,
  `gender_id` char(36) NOT NULL,
  `family_income` decimal(12,2) NOT NULL COMMENT 'Ingreso familiar mensual en moneda local',
  `number_of_family_members` int NOT NULL COMMENT 'Número total de integrantes en la familia',
  `number_of_siblings` int NOT NULL,
  `parents_marital_status` varchar(50) NOT NULL COMMENT 'Estado civil de los padres',
  `housing_type` varchar(100) NOT NULL COMMENT 'Tipo de vivienda: propia, rentada, prestada, etc.',
  `housing_condition` varchar(100) NOT NULL COMMENT 'Condición de la vivienda: buena, regular, mala',
  `number_of_rooms` int NOT NULL COMMENT 'Número de habitaciones en la vivienda',
  `father_education_level` varchar(100) NOT NULL,
  `mother_education_level` varchar(100) NOT NULL,
  `father_employment_status` varchar(100) NOT NULL,
  `mother_employment_status` varchar(100) NOT NULL,
  `father_occupation` varchar(150) NOT NULL,
  `mother_occupation` varchar(150) NOT NULL,
  `has_running_water` tinyint(1) NOT NULL DEFAULT '0',
  `has_electricity` tinyint(1) NOT NULL DEFAULT '0',
  `has_internet_access` tinyint(1) NOT NULL DEFAULT '0',
  `internet_type` varchar(100) DEFAULT NULL COMMENT 'Fibra óptica, móvil, etc.',
  `has_study_space` tinyint(1) NOT NULL DEFAULT '0',
  `study_space_description` varchar(255) DEFAULT NULL,
  `health_issues` text COMMENT 'Enfermedades o condiciones de salud del estudiante o familia',
  `has_health_insurance` tinyint(1) NOT NULL DEFAULT '0',
  `type_of_health_insurance` varchar(100) DEFAULT NULL,
  `transport_to_school` varchar(100) NOT NULL COMMENT 'Cómo llega el estudiante a la escuela',
  `transport_time_minutes` int DEFAULT NULL COMMENT 'Tiempo aproximado de traslado en minutos',
  `devices_available` varchar(255) DEFAULT NULL COMMENT 'Dispositivos tecnológicos en casa (PC, tablet, celular)',
  `extracurricular_activities` varchar(255) DEFAULT NULL,
  `family_support_for_studies` varchar(255) DEFAULT NULL COMMENT 'Nivel de apoyo que la familia brinda para estudios',
  `additional_notes` text,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`diagnostic_id`),
  KEY `student_id` (`student_id`),
  KEY `teacher_id` (`teacher_id`),
  KEY `grade_group_id` (`grade_group_id`),
  KEY `level_education_id` (`level_education_id`),
  KEY `gender_id` (`gender_id`),
  CONSTRAINT `diagnostic_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `diagnostic_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `diagnostic_ibfk_3` FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`),
  CONSTRAINT `diagnostic_ibfk_4` FOREIGN KEY (`level_education_id`) REFERENCES `cat_educational_level` (`level_education_id`),
  CONSTRAINT `diagnostic_ibfk_5` FOREIGN KEY (`gender_id`) REFERENCES `cat_gender` (`gender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnostic`
--

/*!40000 ALTER TABLE `diagnostic` DISABLE KEYS */;
/*!40000 ALTER TABLE `diagnostic` ENABLE KEYS */;

--
-- Table structure for table `grade_groups`
--

DROP TABLE IF EXISTS `grade_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grade_groups` (
  `grade_group_id` char(36) NOT NULL,
  `grade_name` varchar(50) NOT NULL,
  `group_name` varchar(10) NOT NULL,
  `label` varchar(20) NOT NULL,
  PRIMARY KEY (`grade_group_id`),
  UNIQUE KEY `label` (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_groups`
--

/*!40000 ALTER TABLE `grade_groups` DISABLE KEYS */;
INSERT INTO `grade_groups` VALUES ('2da64d8e-61fd-11f0-a977-d843ae0db894','Primero','A','Primero A'),('2da66b50-61fd-11f0-a977-d843ae0db894','Segundo','A','Segundo A'),('2da66f9e-61fd-11f0-a977-d843ae0db894','Segundo','B','Segundo B'),('2da67173-61fd-11f0-a977-d843ae0db894','Tercero','A','Tercero A'),('2da672d4-61fd-11f0-a977-d843ae0db894','Tercero','B','Tercero B'),('2da6745b-61fd-11f0-a977-d843ae0db894','Tercero','C','Tercero C');
/*!40000 ALTER TABLE `grade_groups` ENABLE KEYS */;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modules` (
  `module_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `parents_id` char(36) NOT NULL,
  `gender_id` char(36) NOT NULL,
  `level_studies_id` char(36) NOT NULL,
  `grade_group_id` char(36) NOT NULL,
  `work_shift_id` char(36) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `ocupation` varchar(60) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`parents_id`),
  UNIQUE KEY `email` (`email`),
  KEY `work_shift_id` (`work_shift_id`),
  KEY `grade_group_id` (`grade_group_id`),
  KEY `parents_ibfk_3_idx` (`gender_id`),
  KEY `parents_ibfk_4_idx` (`level_studies_id`),
  KEY `parents_ibfk_5_idx` (`status_id`),
  CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`work_shift_id`) REFERENCES `cat_work_shifts` (`shifts_works_id`),
  CONSTRAINT `parents_ibfk_2` FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`),
  CONSTRAINT `parents_ibfk_3` FOREIGN KEY (`gender_id`) REFERENCES `cat_gender` (`gender_id`),
  CONSTRAINT `parents_ibfk_4` FOREIGN KEY (`level_studies_id`) REFERENCES `cat_educational_level` (`level_education_id`),
  CONSTRAINT `parents_ibfk_5` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `permissions_id` char(36) NOT NULL,
  `module_id` char(36) NOT NULL,
  `action_id` char(36) NOT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`permissions_id`),
  KEY `permissions_ibfk_1` (`module_id`),
  KEY `permissions_ibfk_2` (`action_id`),
  CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`module_id`) REFERENCES `modules` (`module_id`),
  CONSTRAINT `permissions_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `actions` (`actions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` char(36) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('b20fb5fc-6224-11f0-a977-d843ae0db894','Administrador','Encargado de la gestión total del sistema: usuarios, configuraciones, datos institucionales.'),('b20fc386-6224-11f0-a977-d843ae0db894','Director(a)','Responsable de supervisar todo el funcionamiento del kínder, incluyendo personal docente y administrativo.'),('b20fc76c-6224-11f0-a977-d843ae0db894','Docente','Encargado de registrar información académica, asistencia y observaciones de los estudiantes.'),('b20fc8b7-6224-11f0-a977-d843ae0db894','Padre/Madre/Tutor','Accede a la información del estudiante: reportes, mensajes, eventos y seguimiento académico.'),('b20fc9cc-6224-11f0-a977-d843ae0db894','Secretaría','Gestiona inscripciones, documentación, control escolar y apoyo administrativo.'),('b20fcadf-6224-11f0-a977-d843ae0db894','Psicólogo(a)','Accede a los registros necesarios para dar seguimiento psicológico y emocional a los estudiantes.'),('b20fcbdf-6224-11f0-a977-d843ae0db894','Soporte Técnico','Encargado del mantenimiento del sistema y atención a incidencias técnicas.');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

--
-- Table structure for table `student_parents`
--

DROP TABLE IF EXISTS `student_parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_parents` (
  `student_parent_id` char(36) NOT NULL,
  `student_id` char(36) NOT NULL,
  `parents_id` char(36) NOT NULL,
  `relationship` varchar(30) NOT NULL,
  `is_primary` tinyint(1) DEFAULT '0',
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_parent_id`),
  KEY `student_parents_ibfk_1` (`student_id`),
  KEY `student_parents_ibfk_2` (`parents_id`),
  CONSTRAINT `student_parents_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `student_parents_ibfk_2` FOREIGN KEY (`parents_id`) REFERENCES `parents` (`parents_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_parents`
--

/*!40000 ALTER TABLE `student_parents` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_parents` ENABLE KEYS */;

--
-- Table structure for table `student_teacher_history`
--

DROP TABLE IF EXISTS `student_teacher_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_teacher_history` (
  `history_id` char(36) NOT NULL,
  `student_id` char(36) NOT NULL,
  `teacher_id` char(36) NOT NULL,
  `grade_group_id` char(36) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`history_id`),
  KEY `student_teacher_history_ibfk_1_idx` (`student_id`),
  KEY `student_teacher_history_ibfk_2_idx` (`teacher_id`),
  KEY `student_teacher_history_ibfk_3_idx` (`grade_group_id`),
  CONSTRAINT `student_teacher_history_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `student_teacher_history_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `student_teacher_history_ibfk_3` FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_teacher_history`
--

/*!40000 ALTER TABLE `student_teacher_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_teacher_history` ENABLE KEYS */;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` char(36) NOT NULL,
  `teacher_id` char(36) NOT NULL,
  `gender_id` char(36) NOT NULL,
  `grade_group_id` char(36) NOT NULL,
  `work_shift_id` char(36) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `curp` varchar(18) NOT NULL,
  `allergies` varchar(255) DEFAULT NULL,
  `medical_conditions` varchar(255) DEFAULT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT NULL,
  `enrollment_date` date NOT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `students_ibfk_2_idx` (`gender_id`),
  KEY `students_ibfk_3_idx` (`grade_group_id`),
  KEY `students_ibfk_3_idx1` (`work_shift_id`),
  KEY `students_ibfk_4_idx` (`status_id`),
  KEY `students_ibfk_1` (`teacher_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`gender_id`) REFERENCES `cat_gender` (`gender_id`),
  CONSTRAINT `students_ibfk_3` FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`),
  CONSTRAINT `students_ibfk_4` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

--
-- Table structure for table `supply_units`
--

DROP TABLE IF EXISTS `supply_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supply_units` (
  `unit_id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `symbol` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supply_units`
--

/*!40000 ALTER TABLE `supply_units` DISABLE KEYS */;
INSERT INTO `supply_units` VALUES ('ea91373e-6224-11f0-a977-d843ae0db894','Caja','cj'),('ea915cef-6224-11f0-a977-d843ae0db894','Paquete','pqt'),('ea916287-6224-11f0-a977-d843ae0db894','Bolsa','bls'),('ea916487-6224-11f0-a977-d843ae0db894','Pieza','pz'),('ea91665d-6224-11f0-a977-d843ae0db894','Litro','L'),('ea916817-6224-11f0-a977-d843ae0db894','Mililitro','ml'),('ea9169dc-6224-11f0-a977-d843ae0db894','Metro','m'),('ea916b7e-6224-11f0-a977-d843ae0db894','Metro cuadrado','m²'),('ea916d73-6224-11f0-a977-d843ae0db894','Botella','bt'),('ea916f0d-6224-11f0-a977-d843ae0db894','Tubo','tb'),('ea91709f-6224-11f0-a977-d843ae0db894','Unidad','u'),('ea91725e-6224-11f0-a977-d843ae0db894','Galón','gal'),('ea9173fb-6224-11f0-a977-d843ae0db894','Rollo','rl'),('ea9175ee-6224-11f0-a977-d843ae0db894','Sobre','sb'),('ea9180bf-6224-11f0-a977-d843ae0db894','Kit','kt'),('ea918267-6224-11f0-a977-d843ae0db894','Jarro','jr'),('ea9184f6-6224-11f0-a977-d843ae0db894','Cuaderno','cuad'),('ea9186aa-6224-11f0-a977-d843ae0db894','Hoja','hoj'),('ea918841-6224-11f0-a977-d843ae0db894','Resma','res');
/*!40000 ALTER TABLE `supply_units` ENABLE KEYS */;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `teacher_id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `location_id` char(36) NOT NULL,
  `gender_id` char(36) NOT NULL,
  `level_studies_id` char(36) NOT NULL,
  `grade_group_id` char(36) NOT NULL,
  `work_shift_id` char(36) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `name_school` varchar(150) NOT NULL,
  `students_in_charge` int DEFAULT '0',
  `cct` varchar(45) NOT NULL,
  `school_zone` varchar(15) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `email` (`email`),
  KEY `teachers_ibfk_1_idx` (`user_id`),
  KEY `teachers_ibfk_2_idx` (`location_id`),
  KEY `teachers_ibfk_3_idx` (`gender_id`),
  KEY `teachers_ibfk_4_idx` (`level_studies_id`),
  KEY `teachers_ibfk_5_idx` (`grade_group_id`),
  KEY `teachers_ibfk_6_idx` (`work_shift_id`),
  KEY `teachers_ibfk_7_idx` (`status_id`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `teachers_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `cat_classrooms` (`location_id`),
  CONSTRAINT `teachers_ibfk_3` FOREIGN KEY (`gender_id`) REFERENCES `cat_gender` (`gender_id`),
  CONSTRAINT `teachers_ibfk_4` FOREIGN KEY (`level_studies_id`) REFERENCES `cat_educational_level` (`level_education_id`),
  CONSTRAINT `teachers_ibfk_5` FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`),
  CONSTRAINT `teachers_ibfk_6` FOREIGN KEY (`work_shift_id`) REFERENCES `cat_work_shifts` (`shifts_works_id`),
  CONSTRAINT `teachers_ibfk_7` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;

--
-- Table structure for table `user_permissions`
--

DROP TABLE IF EXISTS `user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_permissions` (
  `user_permissions_id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `permissions_id` char(36) NOT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_permissions_id`),
  KEY `user_id` (`user_id`),
  KEY `user_permissions_ibfk_1` (`permissions_id`),
  CONSTRAINT `user_permissions_ibfk_1` FOREIGN KEY (`permissions_id`) REFERENCES `permissions` (`permissions_id`),
  CONSTRAINT `user_permissions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_permissions`
--

/*!40000 ALTER TABLE `user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_permissions` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` char(36) NOT NULL,
  `role_id` varchar(50) DEFAULT NULL,
  `name_user` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profile_picture` varchar(500) DEFAULT NULL,
  `account_type` varchar(20) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `created` datetime DEFAULT (now()),
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status_id` char(36) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  KEY `users_ibfk_1_idx` (`role_id`),
  KEY `users_ibfk_2_idx` (`status_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `cat_status` (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'akt_backend_mirror'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-16  3:15:50
