FROM node:lts-alpine

COPY package.json package-lock.json index.js ./
RUN npm install

CMD ["node", "index.js"]

