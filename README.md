# node-migrate tutorial

### Clone and install dependencies
```sh
npm install
```

### Start mysql
```sh
docker run --name=<name> -e MYSQL_ROOT_PASSWORD=<password> -e MYSQL_DATABASE=<db> -p 3306:3306 -d mysql:5.7
```

### Start phpmyadmin
```sh
docker run --name <name> -d --link <name>:db -p 8081:80 phpmyadmin/phpmyadmin
```

### Docker commands
```sh
docker ps
docker inspect <container-hash>
docker exec -it <container-hash> mysql -u root -p
```

### See list of migration command
```sh
npm run migrate -- -h
```

### Examples
```sh
npm run migrate create add-pets
npm run migrate up
npm run migrate list
npm run migrate down
```

### Database config and check db
```sh
node db.js
```
