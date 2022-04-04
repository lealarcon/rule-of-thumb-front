#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
#stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/out/  /usr/share/nginx/html