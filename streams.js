const { on } = require('events');
const fs = require('fs');
const readStream = fs.createReadStream('./docs/map.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/map2.txt');



readStream.on('data', (chunk) => {
    console.log('-----new chunk-----');
    console.log(chunk);

//it is possible to add toStream() function to chunk, or we could pass a second argument to readStream function {encoding: 'utf8'}


    writeStream.write('\n New Chunk \n');
    writeStream.write(chunk);
});

//we can use piping method to to the same thing but with less codding
//  pipng

readStream.pipe(writeStream);