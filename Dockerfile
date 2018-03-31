FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/customer.jar /customer/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/customer/app.jar"]
