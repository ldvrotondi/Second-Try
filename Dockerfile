FROM node:16-alpine AS build

WORKDIR /client

COPY client/package.json ./client/
WORKDIR /client/client
RUN npm install

COPY client/ ./
RUN npm run build

FROM node:16-alpine

WORKDIR /client

COPY api/package.json ./api/
WORKDIR /client/api
RUN npm install

COPY --from=build /client/client/build ./client/build

COPY api/ .

EXPOSE 5000

CMD ["node", "index.js"]
