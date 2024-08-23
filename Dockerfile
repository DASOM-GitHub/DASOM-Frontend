# 1. 빌드 스테이지
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# 2. 런타임 스테이지
FROM node:18-alpine

RUN npm install -g serve

COPY --from=build /app/build /app/build

WORKDIR /app

CMD ["serve", "-s", "build"]

EXPOSE 3000
