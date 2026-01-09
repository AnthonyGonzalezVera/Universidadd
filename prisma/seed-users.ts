import 'dotenv/config';
import { PrismaClient } from '@prisma/client-users';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_USERS,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding Users Database...');

    // Seed Roles
    const roles = [
        { id: 1, name: 'ADMIN' },
        { id: 2, name: 'TEACHER' },
        { id: 3, name: 'STUDENT' },
    ];

    for (const role of roles) {
        await prisma.role.upsert({
            where: { id: role.id },
            update: {},
            create: role,
        });
    }

    console.log('✅ Roles created: ADMIN, TEACHER, STUDENT');

    // Seed Admin User (optional)
    const bcrypt = require('bcrypt');
    const adminPassword = bcrypt.hashSync('admin123', 10);

    await prisma.user.upsert({
        where: { email: 'admin@sudamericano.edu.ec' },
        update: {},
        create: {
            name: 'Administrador',
            email: 'admin@sudamericano.edu.ec',
            password: adminPassword,
            roleId: 1, // ADMIN
            status: 'active',
        },
    });

    console.log('✅ Admin user created: admin@sudamericano.edu.ec / admin123');
    console.log('✅ Users Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error seeding users database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
