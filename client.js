const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541 
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

   // message sent to the server once connected
   conn.on('connect', () => { 
    console.log('Successfully connected to game server');
  });

   // send the server a message, naming the snake
  conn.on('connect', () => { 
    conn.write('Name: JGG');
  });

  // Dictate an initial move for the snake
  conn.on('connect', () => {
    conn.write('Move: up');
  });

  // message to client after server kicks them out for idling too long
  // conn.on('data', (data) => { 
  //   console.log(data); // 'you ded cuz you idled'
  // });

  return conn;
} 

module.exports = connect;