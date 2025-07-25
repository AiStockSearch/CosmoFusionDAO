# 1. Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

# 2. Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 