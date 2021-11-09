## Simple node express app inside nodejs:alpine image

---
### Usage
### 1. To build the image:

`docker build .`

Or you can tag your image using -t parameter

`docker build -t <name>/<repo>:<tag> .`

- example :

`docker build -t abdussalam/redis:latest .`

`docker build -t abdussalam/redis .`

if you don't specify <tag> docker will tag the image as latest by default.

### 2. To run your container
a. ` docker ps`

b. ` docker run -p <localmachine_port>:<container_port> <container_id>`

Or you can use the tag instead:

`docker run <name>/<repo>:<tag>`

Example:

`docker run -p 80:8080 abdussalam/redis`

That's mean the application works on port 8080 inside the container and mapped to port 80 in your local machine.
