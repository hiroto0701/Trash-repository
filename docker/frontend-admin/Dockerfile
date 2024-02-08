FROM node:18-alpine

WORKDIR /app

COPY ./frontend-admin/package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]