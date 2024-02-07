FROM node:18-alpine

WORKDIR /usr/app

COPY ./frontend-admin/package*.json ./

RUN apk update
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]