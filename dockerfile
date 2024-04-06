FROM node:18-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY pnpm-lock.yaml ./  
RUN pnpm fetch

RUN pnpm install -g @nestjs/cli

COPY . .

RUN pnpm install  

CMD ["pnpm", "run", "start:dev"]