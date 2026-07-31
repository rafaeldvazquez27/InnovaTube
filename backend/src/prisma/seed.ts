import prisma from '../config/prisma';

async function main() {

    await prisma.user.create({
        data: {
            name: 'Administrador',
            email: 'admin@innovatube.com',
            password: '123456'
        }
    });

    console.log('Usuario creado');

}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });