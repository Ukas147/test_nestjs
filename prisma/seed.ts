import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Criar usuários
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@exemplo.com',
      name: 'Administrador',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'vendedor@exemplo.com',
      name: 'Vendedor',
    },
  });

  console.log('✅ Usuários criados:', { user1: user1.id, user2: user2.id });

  // Criar produtos
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Tecido Algodão',
        priceCents: 2500, // R$ 25,00 (em centavos)
        quantity: 100, // 10 metros (100 / 10)
        isActive: true,
      },
      {
        name: 'Cabo Elétrico 2.5mm',
        priceCents: 850, // R$ 8,50 (em centavos)
        quantity: 500, // 50 metros (500 / 10)
        isActive: true,
      },
      {
        name: 'Fio de Cobre 1.5mm',
        priceCents: 1200, // R$ 12,00 (em centavos)
        quantity: 200, // 20 metros (200 / 10)
        isActive: true,
      },
      {
        name: 'Produto Inativo',
        priceCents: 500, // R$ 5,00 (em centavos)
        quantity: 50, // 5 metros (50 / 10)
        isActive: false, // Produto inativo para testar soft delete
      },
    ],
  });

  console.log('✅ Produtos criados:', products.count);

  console.log('🎉 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
