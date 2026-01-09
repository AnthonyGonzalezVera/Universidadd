import 'dotenv/config';
import { PrismaClient } from '@prisma/client-academic';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_ACADEMIC,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding Academic Database...');

    // Seed Specialities
    const specialities = [
        { id: 1, name: 'Tecnología', description: 'Especialidad en tecnología y sistemas' },
        { id: 2, name: 'Salud', description: 'Especialidad en ciencias de la salud' },
        { id: 3, name: 'Ciencias Sociales', description: 'Especialidad en ciencias sociales y humanas' },
    ];

    for (const speciality of specialities) {
        await prisma.speciality.upsert({
            where: { id: speciality.id },
            update: {},
            create: speciality,
        });
    }

    console.log('✅ Specialities created');

    // Seed Careers
    const careers = [
        { id: 1, name: 'Ingeniería en Software', totalCicles: 10, durationYears: 5 },
        { id: 2, name: 'Medicina', totalCicles: 12, durationYears: 6 },
        { id: 3, name: 'Derecho', totalCicles: 10, durationYears: 5 },
        { id: 4, name: 'Ingeniería Civil', totalCicles: 10, durationYears: 5 },
        { id: 5, name: 'Psicología', totalCicles: 10, durationYears: 5 },
    ];

    for (const career of careers) {
        await prisma.career.upsert({
            where: { id: career.id },
            update: {},
            create: career,
        });
    }

    console.log('✅ Careers created');

    // Seed Cycles
    const cycles = [
        {
            id: 1,
            name: '2024-1',
            year: 2024,
            period: 1,
            startDate: new Date('2024-01-15'),
            endDate: new Date('2024-06-30'),
            isActive: false,
        },
        {
            id: 2,
            name: '2024-2',
            year: 2024,
            period: 2,
            startDate: new Date('2024-07-15'),
            endDate: new Date('2024-12-20'),
            isActive: false,
        },
        {
            id: 3,
            name: '2025-1',
            year: 2025,
            period: 1,
            startDate: new Date('2025-01-15'),
            endDate: new Date('2025-06-30'),
            isActive: true,
        },
    ];

    for (const cycle of cycles) {
        await prisma.cycle.upsert({
            where: {
                year_period: {
                    year: cycle.year,
                    period: cycle.period,
                }
            },
            update: {},
            create: cycle,
        });
    }

    console.log('✅ Cycles created');

    // Seed Subjects for Ingeniería en Software (Career ID: 1)
    const subjects = [
        { name: 'Programación I', careerId: 1, cicleNumber: 1, cycleId: 3 },
        { name: 'Matemáticas I', careerId: 1, cicleNumber: 1, cycleId: 3 },
        { name: 'Introducción a la Ingeniería', careerId: 1, cicleNumber: 1, cycleId: 3 },
        { name: 'Programación II', careerId: 1, cicleNumber: 2, cycleId: 3 },
        { name: 'Estructuras de Datos', careerId: 1, cicleNumber: 2, cycleId: 3 },
        { name: 'Base de Datos', careerId: 1, cicleNumber: 3, cycleId: 3 },
        { name: 'Desarrollo Web', careerId: 1, cicleNumber: 3, cycleId: 3 },
    ];

    for (const subject of subjects) {
        await prisma.subject.upsert({
            where: {
                careerId_cicleNumber_name: {
                    careerId: subject.careerId,
                    cicleNumber: subject.cicleNumber,
                    name: subject.name,
                },
            },
            update: {},
            create: subject,
        });
    }

    console.log('✅ Subjects created');
    console.log('✅ Academic Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding academic database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
