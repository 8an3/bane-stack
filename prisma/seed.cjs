const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    console.log('🌱 Seeding database...');

    try {
        const hashedPassword = await bcrypt.hash('daisy', 12); // Use a stronger default password

        const user = await prisma.user.upsert({
            where: { email: 'johnwick@thecontinental.com' },
            update: {},
            create: {
                email: 'johnwick@thecontinental.com',
                passwordHash: hashedPassword,
            },
        });

        console.log('✅ Test user created:', user.email);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });