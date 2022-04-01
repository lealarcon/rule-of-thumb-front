#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/out/  /usr/share/nginx/html