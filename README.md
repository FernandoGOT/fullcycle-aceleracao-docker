# Execute as simple docker images

## Build the images

### Mysql

```bash
docker build -t db ./mysql
```

### Node

```bash
docker build -t node ./nodejs
```

### Nginx

```bash
docker build -t nginx ./nginx
```

## Create the network

```bash
docker network create --driver bridge fullcycle-aceleracao
```

## Clear db folder

```bash
sudo rm -rf ./mysql/db
```

## Run dockers

### DB (MySQL)

```bash
docker run -d --rm --name db --network fullcycle-aceleracao --mount type=bind,source="$(pwd)"/mysql/db,target=/var/lib/mysql db
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
docker run -d --rm --name node --network fullcycle-aceleracao node
```

### Nginx

```bash
docker run -d --rm --name nginx --network fullcycle-aceleracao -p 80:80 nginx
```

## Test

Access the [`localhost`](http://localhost/) page

# Stop dockers

```bash
docker stop nginx && docker stop node && docker stop db
```
