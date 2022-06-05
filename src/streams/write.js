import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToWrite.txt');

export const write = async () => {
    const stream = fs.createWriteStream(pathToFile);
    process.stdin.pipe(stream)
    process.stdin.resume()
};

write()