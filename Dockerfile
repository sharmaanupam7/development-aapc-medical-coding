
FROM node:22-bookworm-slim

WORKDIR /app

# Install dependencies, including Prisma CLI and build tools
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Prisma 7 reads DATABASE_URL from prisma.config.ts.
# This placeholder is only for generating Prisma Client during image build.
ENV DATABASE_URL="mysql://build:build@127.0.0.1:3306/build"

# Generate Prisma Client and build Next.js
RUN npx prisma generate
RUN npm run build

# Production configuration
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
