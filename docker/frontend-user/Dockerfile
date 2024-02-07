FROM node:18-alpine

WORKDIR /usr/app

COPY ./frontend-user/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]