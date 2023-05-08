const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("todos.json");
const port = 4000;

server.use(cors());
server.use(router);

server.listen(port, () => {
  console.log(
    `JSON server running on port ${port}. \nAccess to the api using: http://localhost:${port}/`
  );
});
