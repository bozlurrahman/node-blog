FROM node:12-alpine3.11
WORKDIR /code
COPY ./package.json /code
RUN yarn install
COPY . /code
RUN yarn run build
FROM node:12-alpine3.11
COPY --from=0 /code .
RUN apk --update add git less openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*
EXPOSE 8080