# 1. Build stage
FROM node:20 AS build
WORKDIR /app

# Accept build arguments for environment variables
ARG BWS_ACCESS_TOKEN
ARG PROJECT_ID_1
ARG PROJECT_ID_2

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Install bws CLI for fetching secrets during build
RUN apt-get update && apt-get install -y curl unzip \
    && curl -L https://github.com/bitwarden/sdk/releases/download/bws-v1.0.0/bws-x86_64-unknown-linux-gnu-1.0.0.zip -o bws.zip \
    && unzip bws.zip \
    && mv bws /usr/local/bin/ \
    && chmod +x /usr/local/bin/bws \
    && rm bws.zip

# Fetch secrets and build with environment variables
RUN bws secret list $PROJECT_ID_1 --access-token $BWS_ACCESS_TOKEN --output env > .env && \
    bws secret list $PROJECT_ID_2 --access-token $BWS_ACCESS_TOKEN --output env >> .env && \
    export $(cat .env | xargs) && \
    yarn build

# 2. Production stage
FROM node:20
# Install serve globally
RUN yarn global add serve

# Copy build artifacts
COPY --from=build /app/build /app/build
WORKDIR /app

# Start serve
CMD ["serve", "-s", "build", "-l", "3000"]