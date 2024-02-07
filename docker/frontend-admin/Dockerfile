FROM node:18-alpine

WORKDIR /usr/app

COPY ./frontend-admin/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]