FROM node:20-alpine AS builder
WORKDIR /app
ARG VITE_API_BASE
ENV VITE_API_BASE=$VITE_API_BASE
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["sh", "-c", "cp -rv /app/dist/. /shared-assets/"]