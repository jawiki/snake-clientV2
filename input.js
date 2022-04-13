let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();

function handleUserInput (key) {
  if (key === '\u0003' || key === 'x') {
    process.exit();
  }
  if (key === 'w') {
    conn.write("Move: up");
  }
  if (key === 'a') {
    conn.write("Move: left");
  }
  if (key === 's') {
    conn.write("Move: down");
  }
  if (key === 'd') {
    conn.write("Move: right");
  }
  if (key === '1') {
    conn.write("Say: Kangarae");
  }
  if (key === '2') {
    conn.write("Say: Pandae");
  }
  if (key === '3') {
    conn.write("Say: Puffin");
  }
};

module.exports = {setupInput};