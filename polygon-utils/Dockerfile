FROM node:16.13.0 as base

RUN apt-get -y update

WORKDIR /app


# Expose port 8070
EXPOSE 8070

# Add package file
COPY package*.json ./

RUN npm i -g ts-node
RUN npm i -g typescript
RUN npm i
COPY . .

FROM base as dev
RUN npm run dev

FROM base as test
RUN npm run test


