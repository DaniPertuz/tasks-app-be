FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3300

CMD ["yarn", "start:dev"]
