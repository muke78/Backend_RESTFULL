Table "users" {
  "ID" char(36) [pk, not null]
  "NameUser" varchar(100) [not null] 
  "Email" varchar(100) [not null, unique] 
  "Password" char(150) [not null] 
  "Role" varchar(50) [default: NULL] 
  "PermitID" char(36) [not null]
  "LastLogin" datetime [default: NULL] 
  "AccountStatus" varchar(20) [default: 'Active'] 
  "Created" datetime [default: `CURRENT_TIMESTAMP`] 
  "Updated" datetime [default: `CURRENT_TIMESTAMP`] 
}

Table "teachers" {
  "ID" char(36) [pk, not null]
  "TeacherID" char(36) [pk, not null]
  "FirstName" varchar(100) [not null]
  "LastName" varchar(100) [not null]
  "NameSchool" varchar(150) [not null]
  "LevelStudies" varchar(45) [not null]
  "StudentsInCharge" int [not null]
  "Grade" varchar(50) [not null]
  "Group" varchar(10) [not null]
  "CCT" varchar(45) [not null]
  "SchoolZone" varchar(15) [not null]
  "WorkShift" varchar(45) [not null]
  "Curp" varchar(20) [not null]
  "Email" varchar(100) [not null]
  "Phone" bigint [not null]
  "Age" int [not null]
  "Address" varchar(255) [not null]
  "EmergencyContact" varchar(100) [not null]
  "EmergencyPhone" varchar(15) [not null]
  "Created" datetime [default: `CURRENT_TIMESTAMP`]
  "Updated" datetime [default: `CURRENT_TIMESTAMP`]
  "Status" int [default: '5']
}

Table "parents" {
   "ID" char(36) [pk, not null]
   "TeacherID" char(36) [pk, not null]
   "FirstName" varchar(100) [not null]
   "LastName" varchar(100) [not null]
   "DateOfBirth" date [not null] 
   "Ocupation" varchar(60) [not null]
   "Gender" varchar(10) [not null] 
   "Curp" varchar(20) [not null] 
   "Email" varchar(100) [not null]
   "Phone" bigint [not null]
   "Age" int [not null]
   "Address" varchar(200) [not null] 
   "EmergencyContact" varchar(100) [not null]
   "EmergencyPhone" varchar(15) [not null]
   "Created" datetime [default: `CURRENT_TIMESTAMP`]
   "Updated" datetime [default: `CURRENT_TIMESTAMP`]
   "Status" int [default: '5']
}

Table "students" {
   "ID" char(36) [pk, not null] 
   "IDTeacher" char(36) [not null] 
   "IDMom" char(36) [not null]
   "IDDad" char(36) [not null]
   "NameStudent" varchar(100) [not null]
   "Grade" varchar(50) [not null]
   "Group" varchar(10) [not null]
   "Average" decimal(5,2) [null] 
   "AgeStudent" int [not null] 
   "Curp" varchar(20) [not null] 
   "DateOfBirth" date [not null] 
   "Gender" varchar(10) [not null] 
   "Address" varchar(200) [not null] 
   "NameOfMom" varchar(100) [not null] 
   "NameOfDad" varchar(100) [not null] 
   "EmergencyContact" varchar(100) [not null]
   "EmergencyPhone" varchar(15) [not null]
   "Allergies" varchar(255) [not null] 
   "MedicalConditions" varchar(255) [not null]
   "EnrollmentDate" date [not null] 
   "Status" int [default: '5']
}

Table "qualifications" {
     "ID" char(36) [pk, not null] 
    "IDStudent" char(36) [not null] 
    "Subject" varchar(100) [not null]
    "Grade" decimal(5,2) [not null] 
    "Term" varchar(50) [not null]
    "DateRecorded" date [not null]
    "Comments" text [null]
    "GradeLevel" varchar(50) [not null] 
    "Group" varchar(10) [not null]
}

Table "student_teacher_history" {
    "ID" char(36) [pk, not null]
    "StudentID" char(36) [not null]
    "TeacherID" char(36) [not null]
    "Grade" varchar(50) [not null]
    "Group" varchar(10) [not null]
    "StartDate" date [not null]
    "EndDate" date [default: null]
}


Table "catSupplies(insumos)" {
  "ID" char(36) [pk, not null]
  "Name" varchar(100) [not null] 
  "Description" varchar(255) [default: NULL] 
  "Quantity" int [default: 0] 
  "Unit" varchar(50) [default: NULL] 
  "Supplier" varchar(100) [default: NULL] 
  "PurchaseDate" date [default: NULL] 
  "ExpiryDate" date [default: NULL] 
  "Cost" decimal(10, 2) [default: 0.00] 
  "Status" varchar(20) [default: 'Active']
}


Table "catAssets(activos)" {
  "ID" char(36) [pk, not null]
  "Name" varchar(100) [not null] 
  "Description" varchar(255) [default: NULL]
  "PurchaseDate" date [default: NULL] 
  "Cost" decimal(10, 2) [default: 0.00] 
  "Location" varchar(100) [default: NULL] 
  "Condition" varchar(20) [default: NULL]
  "Status" varchar(20) [default: 'active'] 
  "LastMaintenanceDate" date [default: NULL] 
  "WarrantyEndDate" date [default: NULL] 
}


Table "catInventory(inventario)" {
  "ID" char(36) [pk, not null] 
  "ItemCode" varchar(50) [not null] 
  "Name" varchar(100) [not null] 
  "Description" varchar(255) [default: NULL] 
  "Quantity" int [default: 0]
  "Weight" decimal(10, 2) [default: NULL] 
  "Dimensions" varchar(50) [default: NULL]
  "Location" varchar(100) [default: NULL] 
  "Condition" varchar(20) [default: NULL] 
  "PurchaseDate" date [default: NULL]
}


Table "diagnostic(Diagnostico)" {
   "ID" char(36) [pk, not null]
}


Table "permissions" {
  "ID" char(36) [pk, not null]
  "ModuleID" char(36) [not null] 
  "ActionID" char(36) [not null]
}

Table "actions" {
  "ID" char(36) [pk, not null]
  "ActionName" varchar(50) [not null] // "View", "Add", "Edit", "Delete"
}



Table "user_permissions" {
  "ID" char(36) [pk, not null]
  "UserID" char(36) [not null]
  "PermitID" char(36) [not null]
}


Table "modules" {
  "ID" char(36) [pk, not null]
  "ModuleName" varchar(100) [not null] 
}


Ref: "users"."ID" < "teachers"."TeacherID"
  
Ref: "parents"."TeacherID" > "teachers"."TeacherID"

Ref: "parents"."ID" < "students"."IDMom"

Ref: "parents"."ID" < "students"."IDDad"

Ref: "students"."IDTeacher" > "parents"."TeacherID"

Ref: "students"."ID" < "student_teacher_history"."StudentID"

Ref: "teachers"."ID" < "student_teacher_history"."TeacherID"

Ref: "users"."ID" < "user_permissions"."UserID"

Ref: "students"."ID" < "qualifications"."IDStudent"


Ref: "permissions"."ModuleID" < "modules"."ID"

Ref: "user_permissions"."PermitID" < "permissions"."ID"

Ref: "permissions"."ActionID" < "actions"."ID"