# import base image
FROM node:alpine

WORKDIR /var/app
#Copy work files to container
COPY ./package.json ./
#install dependencacies
RUN npm install
# Copy app files
COPY ./ ./

# Set primary command
CMD ["npm","start"]

