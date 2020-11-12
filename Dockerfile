FROM node:alpine as guidsgen-client
WORKDIR /app
COPY package*.json ./
COPY . /app

RUN npm install
RUN npm rebuild node-sass --verbose
RUN npm run build --verbose

FROM nginx:alpine
COPY --from=guidsgen-client /app/build /usr/share/nginx/html
EXPOSE 80