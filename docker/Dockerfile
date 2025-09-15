# ./docker/frontend/Dockerfile
FROM node:22

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

COPY medtech .

RUN pnpm install
RUN pnpm build

ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]