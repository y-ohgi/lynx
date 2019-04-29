FROM node:8.10-alpine

WORKDIR /app

COPY ./package.json package-lock.json /app/

RUN npm install

ENV HOST 0.0.0.0

COPY . .

RUN npm run build

CMD ["npm", "start"]
