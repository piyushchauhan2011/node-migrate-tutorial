# node-migrate tutorial

```sh
# Clone and install dependencies
npm install

# Start mysql
docker run --name=<name> -e MYSQL_ROOT_PASSWORD=<password> -e MYSQL_DATABASE=<db> -p 3306:3306 -d mysql:5.7
# Start phpmyadmin
docker run --name <name> -d --link <name>:db -p 8081:80 phpmyadmin/phpmyadmin

# docker commands
docker ps
docker inspect <container-hash>
docker exec -it <container-hash> mysql -u root -p

# See list of migration command
npm run migrate -- -h

# examples
npm run migrate create add-pets
npm run migrate up
npm run migrate list
npm run migrate down

# database config and check db
node db.js
```
