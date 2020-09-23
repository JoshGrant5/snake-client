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

  // message to client after server kicks them out for idling too long
  conn.on('data', (data) => { 
    console.log('you ded cuz you idled')
  });

  return conn;
} 

module.exports = connect;