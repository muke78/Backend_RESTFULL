CREATE TABLE `users` (
  `user_id` uuid PRIMARY KEY NOT NULL,
  `role_id` varchar(50) DEFAULT null,
  `name_user` varchar(100) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `password` varchar(100) NOT NULL,
  `last_login` datetime DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `teachers` (
  `teacher_id` uuid PRIMARY KEY NOT NULL,
  `user_id` uuid NOT NULL,
  `location_id` uuid NOT NULL,
  `gender_id` uuid NOT NULL,
  `level_studies_id` uuid NOT NULL,
  `grade_group_id` uuid NOT NULL,
  `work_shift_id` uuid NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `name_school` varchar(150) NOT NULL,
  `students_in_charge` int NOT NULL,
  `cct` varchar(45) NOT NULL,
  `school_zone` varchar(15) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `phone` varchar(15) NOT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `parents` (
  `parents_id` uuid PRIMARY KEY NOT NULL,
  `gender_id` uuid NOT NULL,
  `level_studies_id` uuid NOT NULL,
  `grade_group_id` uuid NOT NULL,
  `work_shift_id` uuid NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `ocupation` varchar(60) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `phone` varchar(15) NOT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `students` (
  `student_id` uuid PRIMARY KEY NOT NULL,
  `teacher_id` uuid NOT NULL,
  `gender_id` uuid NOT NULL,
  `grade_group_id` uuid NOT NULL,
  `work_shift_id` uuid NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `paternal_surname` varchar(100) NOT NULL,
  `maternal_surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `curp` varchar(18) NOT NULL,
  `allergies` varchar(255) NOT NULL,
  `medical_conditions` varchar(255) NOT NULL,
  `state` varchar(100) NOT NULL,
  `suburb` varchar(100) NOT NULL,
  `street` varchar(150) NOT NULL,
  `emergency_contact` varchar(100) NOT NULL,
  `emergency_phone` varchar(15) DEFAULT null,
  `enrollment_date` date NOT NULL,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `student_parents` (
  `student_parent_id` uuid PRIMARY KEY NOT NULL,
  `student_id` uuid NOT NULL,
  `parents_id` uuid NOT NULL,
  `relationship` varchar(30) NOT NULL,
  `is_primary` boolean DEFAULT false,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `student_teacher_history` (
  `history_id` uuid PRIMARY KEY NOT NULL,
  `student_id` uuid NOT NULL,
  `teacher_id` uuid NOT NULL,
  `grade_group_id` uuid NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `cat_supplies` (
  `supplies_id` uuid PRIMARY KEY NOT NULL,
  `supplier_id` uniqueidentifier NOT NULL,
  `unit_id` uuid NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT null,
  `quantity` int DEFAULT 0,
  `purchase_date` date DEFAULT null,
  `expiry_date` date DEFAULT null,
  `cost` decimal(10,2) DEFAULT 0,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `cat_assets` (
  `assets_id` uuid PRIMARY KEY NOT NULL,
  `condition_id` uuid NOT NULL,
  `location_id` uuid NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT null,
  `purchase_date` date DEFAULT null,
  `cost` decimal(10,2) DEFAULT 0,
  `last_maintenance_date` date DEFAULT null,
  `warranty_end_date` date DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `cat_inventory` (
  `inventory_id` uuid PRIMARY KEY NOT NULL,
  `condition_id` uuid NOT NULL,
  `location_id` uuid NOT NULL,
  `item_code` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT null,
  `quantity` int DEFAULT 0,
  `weight` decimal(10,2) DEFAULT null,
  `width` decimal(10,2) DEFAULT null,
  `height` decimal(10,2) DEFAULT null,
  `serial_number` varchar(100),
  `purchase_date` date DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP),
  `status_id` uuid NOT NULL
);

CREATE TABLE `cat_supplier` (
  `supplier_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100),
  `phone` varchar(15),
  `address` varchar(255)
);

CREATE TABLE `cat_classrooms` (
  `location_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(100) NOT NULL,
  `room_type` varchar(50),
  `capacity` int
);

CREATE TABLE `cat_gender` (
  `gender_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(30) NOT NULL
);

CREATE TABLE `cat_status` (
  `status_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(100)
);

CREATE TABLE `role` (
  `role_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(100)
);

CREATE TABLE `grade_groups` (
  `grade_group_id` uuid PRIMARY KEY NOT NULL,
  `grade_name` varchar(50) NOT NULL,
  `group_name` varchar(10) NOT NULL,
  `label` varchar(20) UNIQUE NOT NULL,
  `level_education_id` uuid
);

CREATE TABLE `cat_educational_level` (
  `level_education_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL,
  `short_name` varchar(10)
);

CREATE TABLE `cat_work_shifts` (
  `shifts_works_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `asset_conditions` (
  `condition_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255)
);

CREATE TABLE `supply_units` (
  `unit_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(100) NOT NULL,
  `symbol` varchar(20)
);

CREATE TABLE `diagnostic` (
  `diagnostic_id` uuid PRIMARY KEY NOT NULL,
  `student_id` uuid NOT NULL,
  `teacher_id` uuid NOT NULL,
  `grade_group_id` uuid NOT NULL,
  `level_education_id` uuid NOT NULL,
  `gender_id` uuid NOT NULL,
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
  `has_running_water` boolean NOT NULL DEFAULT false,
  `has_electricity` boolean NOT NULL DEFAULT false,
  `has_internet_access` boolean NOT NULL DEFAULT false,
  `internet_type` varchar(100) DEFAULT null COMMENT 'Fibra óptica, móvil, etc.',
  `has_study_space` boolean NOT NULL DEFAULT false,
  `study_space_description` varchar(255) DEFAULT null,
  `health_issues` text DEFAULT null COMMENT 'Enfermedades o condiciones de salud del estudiante o familia',
  `has_health_insurance` boolean NOT NULL DEFAULT false,
  `type_of_health_insurance` varchar(100) DEFAULT null,
  `transport_to_school` varchar(100) NOT NULL COMMENT 'Cómo llega el estudiante a la escuela',
  `transport_time_minutes` int DEFAULT null COMMENT 'Tiempo aproximado de traslado en minutos',
  `devices_available` varchar(255) DEFAULT null COMMENT 'Dispositivos tecnológicos en casa (PC, tablet, celular)',
  `extracurricular_activities` varchar(255) DEFAULT null,
  `family_support_for_studies` varchar(255) DEFAULT null COMMENT 'Nivel de apoyo que la familia brinda para estudios',
  `additional_notes` text DEFAULT null,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `permissions` (
  `permissions_id` uuid PRIMARY KEY NOT NULL,
  `module_id` uuid NOT NULL,
  `action_id` uuid NOT NULL,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `actions` (
  `actions_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `user_permissions` (
  `user_permissions_id` uuid PRIMARY KEY NOT NULL,
  `user_id` uuid NOT NULL,
  `permission_id` uuid NOT NULL,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

CREATE TABLE `modules` (
  `module_id` uuid PRIMARY KEY NOT NULL,
  `name` varchar(100) NOT NULL,
  `created` datetime DEFAULT (CURRENT_TIMESTAMP),
  `updated` datetime DEFAULT (CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
);

ALTER TABLE `grade_groups` ADD FOREIGN KEY (`level_education_id`) REFERENCES `cat_educational_level` (`level_education_id`);

ALTER TABLE `diagnostic` ADD FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);

ALTER TABLE `diagnostic` ADD FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`);

ALTER TABLE `diagnostic` ADD FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`);

ALTER TABLE `diagnostic` ADD FOREIGN KEY (`level_education_id`) REFERENCES `cat_educational_level` (`level_education_id`);

ALTER TABLE `diagnostic` ADD FOREIGN KEY (`gender_id`) REFERENCES `cat_gender` (`gender_id`);

ALTER TABLE `teachers` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `student_teacher_history` ADD FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);

ALTER TABLE `student_teacher_history` ADD FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`);

ALTER TABLE `user_permissions` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `modules` ADD FOREIGN KEY (`module_id`) REFERENCES `permissions` (`module_id`);

ALTER TABLE `permissions` ADD FOREIGN KEY (`permissions_id`) REFERENCES `user_permissions` (`permission_id`);

ALTER TABLE `actions` ADD FOREIGN KEY (`actions_id`) REFERENCES `permissions` (`action_id`);

ALTER TABLE `asset_conditions` ADD FOREIGN KEY (`condition_id`) REFERENCES `cat_assets` (`condition_id`);

ALTER TABLE `supply_units` ADD FOREIGN KEY (`unit_id`) REFERENCES `cat_supplies` (`unit_id`);

ALTER TABLE `asset_conditions` ADD FOREIGN KEY (`condition_id`) REFERENCES `cat_inventory` (`condition_id`);

ALTER TABLE `cat_supplier` ADD FOREIGN KEY (`supplier_id`) REFERENCES `cat_supplies` (`supplier_id`);

ALTER TABLE `cat_classrooms` ADD FOREIGN KEY (`location_id`) REFERENCES `cat_inventory` (`location_id`);

ALTER TABLE `cat_classrooms` ADD FOREIGN KEY (`location_id`) REFERENCES `cat_assets` (`location_id`);

ALTER TABLE `cat_classrooms` ADD FOREIGN KEY (`location_id`) REFERENCES `teachers` (`location_id`);

ALTER TABLE `cat_gender` ADD FOREIGN KEY (`gender_id`) REFERENCES `teachers` (`gender_id`);

ALTER TABLE `cat_gender` ADD FOREIGN KEY (`gender_id`) REFERENCES `parents` (`gender_id`);

ALTER TABLE `cat_gender` ADD FOREIGN KEY (`gender_id`) REFERENCES `students` (`gender_id`);

ALTER TABLE `student_parents` ADD FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);

ALTER TABLE `student_parents` ADD FOREIGN KEY (`parents_id`) REFERENCES `parents` (`parents_id`);

ALTER TABLE `role` ADD FOREIGN KEY (`role_id`) REFERENCES `users` (`role_id`);

ALTER TABLE `cat_work_shifts` ADD FOREIGN KEY (`shifts_works_id`) REFERENCES `teachers` (`work_shift_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `cat_supplies` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `cat_assets` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `teachers` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `users` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `cat_inventory` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `parents` (`status_id`);

ALTER TABLE `cat_status` ADD FOREIGN KEY (`status_id`) REFERENCES `students` (`status_id`);

ALTER TABLE `students` ADD FOREIGN KEY (`work_shift_id`) REFERENCES `cat_work_shifts` (`shifts_works_id`);

ALTER TABLE `parents` ADD FOREIGN KEY (`work_shift_id`) REFERENCES `cat_work_shifts` (`shifts_works_id`);

ALTER TABLE `parents` ADD FOREIGN KEY (`grade_group_id`) REFERENCES `grade_groups` (`grade_group_id`);

ALTER TABLE `grade_groups` ADD FOREIGN KEY (`grade_group_id`) REFERENCES `students` (`grade_group_id`);

ALTER TABLE `grade_groups` ADD FOREIGN KEY (`grade_group_id`) REFERENCES `teachers` (`grade_group_id`);

ALTER TABLE `grade_groups` ADD FOREIGN KEY (`grade_group_id`) REFERENCES `student_teacher_history` (`grade_group_id`);

ALTER TABLE `cat_educational_level` ADD FOREIGN KEY (`level_education_id`) REFERENCES `teachers` (`level_studies_id`);

ALTER TABLE `cat_educational_level` ADD FOREIGN KEY (`level_education_id`) REFERENCES `parents` (`level_studies_id`);

ALTER TABLE `teachers` ADD FOREIGN KEY (`teacher_id`) REFERENCES `students` (`teacher_id`);
