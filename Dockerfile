FROM node:24-alpine

# Habilitar corepack para disponer de pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias solo de producción
RUN pnpm install --prod --frozen-lockfile

# Copiar el resto del código de la aplicación
COPY . .

# Comando de inicio según el main/start script del proyecto
CMD ["node", "src/index.js"]
