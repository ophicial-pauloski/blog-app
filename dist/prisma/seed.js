"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: 'sabin@adams.com' },
        update: {},
        create: {
            email: 'sabin@adams.com',
            name: 'Sabin Adams',
            password: 'password-sabin',
        },
    });
    const user2 = await prisma.user.upsert({
        where: { email: 'alex@ruheni.com' },
        update: {},
        create: {
            email: 'alex@ruheni.com',
            name: 'Alex Ruheni',
            password: 'password-alex',
        },
    });
    const post1 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for MongoDB' },
        update: {},
        create: {
            title: 'Prisma Adds Support for MongoDB',
            body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
            description: "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
            published: false,
        },
    });
    const post2 = await prisma.article.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {},
        create: {
            title: "What's new in Prisma? (Q1/22)",
            body: 'Our engineers have been working hard, issuing new releases with many improvements...',
            description: 'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
            published: true,
        },
    });
    console.log({ post1, post2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map