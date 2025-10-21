import { prisma } from '@/config';
import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

async function seedAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL as string;
    const password = process.env.ADMIN_PASSWORD as string;

    if (!email || !password) {
      throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD not found in .env');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.upsert({
      where: { email },
      update: {
        name: 'Neela Rani',
        password: hashedPassword,
        role: Role.ADMIN,
      },
      create: {
        name: 'Neela Rani',
        email,
        password: hashedPassword,
        role: Role.ADMIN,
      },
    });

    console.log('Admin seeded successfully!');
  } catch (error) {
    console.error('Error creating/updating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export default seedAdmin;
