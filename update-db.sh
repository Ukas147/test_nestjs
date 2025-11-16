#!/bin/bash

echo "🔄 Atualizando banco de dados..."

echo "📦 Gerando Prisma Client..."
npx prisma generate

echo "🚀 Aplicando mudanças no banco..."
npx prisma db push

echo "✅ Banco atualizado com sucesso!"
