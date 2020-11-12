FROM node:alpine as guidsgen-client
WORKDIR /app
COPY . /app
RUN apk add --no-cache --virtual .build-deps make gcc g++ python 
RUN npm install --production --silent 
RUN npm rebuild node-sass --silent 
RUN npm run build --silent 
RUN apk del .build-deps

FROM nginx:alpine
COPY --from=guidsgen-client /app/build /usr/share/nginx/html
EXPOSE 80