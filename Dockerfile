FROM node:16.13.2-alpine3.15
WORKDIR /var/www
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build
 CMD ["yarn", "dev"]
