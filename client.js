const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542 
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

  // message to client after server kicks them out for idling too long
  conn.on('data', (data) => { 
    console.log(data); // 'you ded cuz you idled'
  });

  return conn;
} 

module.exports = connect;