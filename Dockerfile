FROM node:alpine as guidsgen-client
WORKDIR /app
COPY package*.json ./
COPY . /app
RUN apk add --no-cache --virtual .build-deps make gcc g++ python \
    && npm install --production --silent \
    && npm rebuild node-sass --silent \
    && npm run build --silent \
    && apk del .build-deps


FROM nginx:alpine
COPY --from=guidsgen-client /app/build /usr/share/nginx/html
EXPOSE 80