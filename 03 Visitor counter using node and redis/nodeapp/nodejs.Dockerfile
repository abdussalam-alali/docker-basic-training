# Install the base image
FROM node:alpine

WORKDIR /usr/app/visitor-count

COPY ./package.json ./
RUN npm install

COPY ./ ./

CMD ["npm","run"]
