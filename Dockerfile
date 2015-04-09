FROM alpine:edge
RUN echo "http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories 
RUN apk update
RUN apk add --update iojs && rm -rf /var/cache/apk/*

RUN mkdir promise-it-wont-hurt && cd promise-it-wont-hurt
ENV init.author.name=whatever
RUN npm install
RUN npm install -g promise-it-wont-hurt@latest
WORKDIR /root
ENV PATH /root:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

ENTRYPOINT ["promise-it-wont-hurt"]
