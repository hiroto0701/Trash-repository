FROM node:18-alpine

WORKDIR /app

COPY ./frontend-user/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]