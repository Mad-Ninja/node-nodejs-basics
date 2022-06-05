import path from 'path';
import {fileURLToPath} from 'url';
import { open } from 'fs/promises';


const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRead.txt');

export const read = async () => {
    const fd = await open(pathToFile);
    const stream = fd.createReadStream();
    stream.on('data', (text) => {
        process.stdout.write(text)

    })
    
};

read();