# Execute as simple docker images

## Create the network

```bash
docker network create --driver bridge fullcycle-aceleracao-docker
```

## Run dockers

### DB (MySQL)

```bash
docker run -d --rm --name db --network fullcycle-aceleracao-docker --mount type=bind,source="$(pwd)"/mysql/db,target=/var/lib/mysql fernandogot/mysql:fullcycle-aceleracao-docker
```

Wait and execute

```bash
docker logs db
```

check if the db is up

```
Version: '5.7.34'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
```

Continue if there is such message, if not, try again in a moment

### Node

```bash
docker run -d --rm --name node --network fullcycle-aceleracao-docker fernandogot/node:fullcycle-aceleracao-docker
```

### Nginx

```bash
docker run -d --rm --name nginx --network fullcycle-aceleracao-docker -p 80:80 fernandogot/nginx:fullcycle-aceleracao-docker
```

## Test

Access the [`localhost`](http://localhost/) page

## Clear data

```bash
docker stop nginx && docker stop node && docker stop db && docker network rm fullcycle-aceleracao-docker
```

remove the db files (WLS or Unix)

```bash
sudo rm -rf ./mysql/db
```
