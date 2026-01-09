/*
  Warnings:

  - You are about to drop the `career` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cycle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `speciality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "subject" DROP CONSTRAINT "subject_career_id_fkey";

-- DropForeignKey
ALTER TABLE "subject" DROP CONSTRAINT "subject_cycle_id_fkey";

-- DropTable
DROP TABLE "career";

-- DropTable
DROP TABLE "cycle";

-- DropTable
DROP TABLE "speciality";

-- DropTable
DROP TABLE "subject";

-- CreateTable
CREATE TABLE "user_reference" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speciality_reference" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "speciality_reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career_reference" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "total_cicles" INTEGER NOT NULL,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "career_reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_reference" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "career_id" INTEGER NOT NULL,
    "cicle_number" INTEGER NOT NULL,
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subject_reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teacher_profile" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "speciality_id" INTEGER NOT NULL,
    "career_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teacher_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_profile" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "career_id" INTEGER NOT NULL,
    "current_cicle" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_assignment" (
    "id" SERIAL NOT NULL,
    "teacher_profile_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subject_assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_subject" (
    "id" SERIAL NOT NULL,
    "student_profile_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "grade" DECIMAL(5,2),
    "status" TEXT NOT NULL DEFAULT 'enrolled',
    "enrolled_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_reference_email_key" ON "user_reference"("email");

-- CreateIndex
CREATE INDEX "user_reference_role_id_idx" ON "user_reference"("role_id");

-- CreateIndex
CREATE INDEX "subject_reference_career_id_cicle_number_idx" ON "subject_reference"("career_id", "cicle_number");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_profile_user_id_key" ON "teacher_profile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_profile_user_id_key" ON "student_profile"("user_id");

-- CreateIndex
CREATE INDEX "student_profile_career_id_current_cicle_idx" ON "student_profile"("career_id", "current_cicle");

-- CreateIndex
CREATE UNIQUE INDEX "subject_assignment_teacher_profile_id_subject_id_key" ON "subject_assignment"("teacher_profile_id", "subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_subject_student_profile_id_subject_id_key" ON "student_subject"("student_profile_id", "subject_id");

-- AddForeignKey
ALTER TABLE "teacher_profile" ADD CONSTRAINT "teacher_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_profile" ADD CONSTRAINT "teacher_profile_speciality_id_fkey" FOREIGN KEY ("speciality_id") REFERENCES "speciality_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacher_profile" ADD CONSTRAINT "teacher_profile_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_profile" ADD CONSTRAINT "student_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_profile" ADD CONSTRAINT "student_profile_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_assignment" ADD CONSTRAINT "subject_assignment_teacher_profile_id_fkey" FOREIGN KEY ("teacher_profile_id") REFERENCES "teacher_profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_assignment" ADD CONSTRAINT "subject_assignment_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_subject" ADD CONSTRAINT "student_subject_student_profile_id_fkey" FOREIGN KEY ("student_profile_id") REFERENCES "student_profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_subject" ADD CONSTRAINT "student_subject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject_reference"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
