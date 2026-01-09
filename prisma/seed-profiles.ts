import 'dotenv/config';
import { PrismaClient } from '@prisma/client-profiles';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_PROFILES,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding Profiles Database...');

    // Seed Speciality References (sync from academic DB)
    const specialityReferences = [
        { id: 1, name: 'Tecnología' },
        { id: 2, name: 'Salud' },
        { id: 3, name: 'Ciencias Sociales' },
    ];

    for (const speciality of specialityReferences) {
        await prisma.specialityReference.upsert({
            where: { id: speciality.id },
            update: {},
            create: speciality,
        });
    }

    console.log('✅ Speciality references created');

    // Seed Career References (sync from academic DB)
    const careerReferences = [
        { id: 1, name: 'Ingeniería en Software', totalCicles: 10 },
        { id: 2, name: 'Medicina', totalCicles: 12 },
        { id: 3, name: 'Derecho', totalCicles: 10 },
        { id: 4, name: 'Ingeniería Civil', totalCicles: 10 },
        { id: 5, name: 'Psicología', totalCicles: 10 },
    ];

    for (const career of careerReferences) {
        await prisma.careerReference.upsert({
            where: { id: career.id },
            update: {},
            create: career,
        });
    }

    console.log('✅ Career references created');

    // Seed Subject References (sync from academic DB)
    const subjectReferences = [
        { id: 1, name: 'Programación I', careerId: 1, cicleNumber: 1 },
        { id: 2, name: 'Matemáticas I', careerId: 1, cicleNumber: 1 },
        { id: 3, name: 'Introducción a la Ingeniería', careerId: 1, cicleNumber: 1 },
        { id: 4, name: 'Programación II', careerId: 1, cicleNumber: 2 },
        { id: 5, name: 'Estructuras de Datos', careerId: 1, cicleNumber: 2 },
        { id: 6, name: 'Base de Datos', careerId: 1, cicleNumber: 3 },
        { id: 7, name: 'Desarrollo Web', careerId: 1, cicleNumber: 3 },
    ];

    for (const subject of subjectReferences) {
        await prisma.subjectReference.upsert({
            where: { id: subject.id },
            update: {},
            create: subject,
        });
    }

    console.log('✅ Subject references created');
    console.log('✅ Profiles Database seeded successfully!');
    console.log('\n📝 Note: User references and profiles will be created automatically when users register');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding profiles database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
