const net = require("net");
const name = 'Jay';
const { IP, PORT } = require("./constants");

const connect = function () {

 conn = net.createConnection({
    ip: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('server just sent you a message!');
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("connected")
    conn.write("Name: Jay");
  });

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  return conn;
};

module.exports = {connect};