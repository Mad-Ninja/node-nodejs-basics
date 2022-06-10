import fs from 'fs/promises';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRead.txt');

export const read = async () => {
    try{
        if (!existsSync(pathToFile)) {
            throw new Error('FS operation failed')
        }
        const data = await fs.readFile(pathToFile);
        console.log(data.toString());
    }
    catch(error){
        console.log(error.message);
    }

};

read();