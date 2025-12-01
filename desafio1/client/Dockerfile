FROM alpine:3.20
RUN apk add --no-cache curl
COPY client.sh .
RUN chmod +x client.sh
CMD ["./client.sh"]