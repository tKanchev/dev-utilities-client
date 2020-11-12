FROM node:current-buster-slim as guidsgen-client
WORKDIR /app
COPY package*.json ./
COPY . /app
RUN npm install

FROM nginx:alpine
COPY --from=guidsgen-client /app/build /usr/share/nginx/html
EXPOSE 80