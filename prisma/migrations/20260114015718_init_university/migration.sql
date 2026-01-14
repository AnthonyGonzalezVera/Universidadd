/*
  Warnings:

  - You are about to drop the `career_reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `speciality_reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject_assignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject_reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_reference` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "student_profile" DROP CONSTRAINT "student_profile_career_id_fkey";

-- DropForeignKey
ALTER TABLE "student_profile" DROP CONSTRAINT "student_profile_user_id_fkey";

-- DropForeignKey
ALTER TABLE "student_subject" DROP CONSTRAINT "student_subject_student_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "student_subject" DROP CONSTRAINT "student_subject_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "subject_assignment" DROP CONSTRAINT "subject_assignment_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "subject_assignment" DROP CONSTRAINT "subject_assignment_teacher_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_profile" DROP CONSTRAINT "teacher_profile_career_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_profile" DROP CONSTRAINT "teacher_profile_speciality_id_fkey";

-- DropForeignKey
ALTER TABLE "teacher_profile" DROP CONSTRAINT "teacher_profile_user_id_fkey";

-- DropTable
DROP TABLE "career_reference";

-- DropTable
DROP TABLE "speciality_reference";

-- DropTable
DROP TABLE "student_profile";

-- DropTable
DROP TABLE "student_subject";

-- DropTable
DROP TABLE "subject_assignment";

-- DropTable
DROP TABLE "subject_reference";

-- DropTable
DROP TABLE "teacher_profile";

-- DropTable
DROP TABLE "user_reference";

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "age" INTEGER,
    "role_id" INTEGER NOT NULL DEFAULT 3,
    "status" TEXT NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sync" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "has_teacher_profile" BOOLEAN NOT NULL DEFAULT false,
    "has_student_profile" BOOLEAN NOT NULL DEFAULT false,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_sync_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_name_key" ON "role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_role_id_idx" ON "user"("role_id");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_sync_user_id_key" ON "user_sync"("user_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
