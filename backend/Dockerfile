# Etapa 1: build da aplicação
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Gera o cliente do Prisma
RUN npx prisma generate

RUN npm run build

# Etapa 2: imagem final
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY prisma ./prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Gera Prisma na imagem final também
RUN npx prisma generate

EXPOSE 3000

# Gera Prisma, faz push do schema e inicia a app
CMD ["sh", "-c", "npx prisma db push && npm start"]