FROM ubuntu

WORKDIR /src

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY ./package*.json ./
COPY tsconfig.json tsconfig.json
COPY nodemon.json nodemon.json
COPY ./src ./src

EXPOSE 5500

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]
