FROM alpine:edge
RUN apk update
RUN apk add --update nodejs && rm -rf /var/cache/apk/*

RUN mkdir promise-it-wont-hurt && cd promise-it-wont-hurt
ENV init.author.name=whatever
RUN npm install -g promise-it-wont-hurt@latest
WORKDIR /root
ENV PATH /root:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

ENTRYPOINT ["promise-it-wont-hurt"]
