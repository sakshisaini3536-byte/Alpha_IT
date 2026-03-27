import fs from 'fs';

fs.writeFile('8_message.txt', 'Node.js is awesome!', (err) => {
  if (err) throw err;
  console.log('✅ File has been saved!');
});
