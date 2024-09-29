CREATE TABLE `teachers` (
  `TeacherID` char(36) NOT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `NameSchool` varchar(300) DEFAULT NULL,
  `LevelStudies` varchar(45) DEFAULT NULL,
  `StudentsInCharge` int DEFAULT NULL,
  `CCT` varchar(45) DEFAULT NULL,
  `SchoolZone` varchar(15) DEFAULT NULL,
  `Curp` varchar(20) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Phone` bigint DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  `Status` int DEFAULT '5',
  PRIMARY KEY (`TeacherID`),
  CONSTRAINT `teachers_chk_1` CHECK (((`Age` >= 0) and (`Age` <= 99)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `usuarios` (
  `id` char(36) NOT NULL,
  `NameUser` varchar(255) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Password` char(150) DEFAULT NULL,
  `Created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

