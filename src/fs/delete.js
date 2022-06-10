import fs from 'fs/promises';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';


const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRemove.txt');

export const remove = async () => {
    try{
        if (!existsSync(pathToFile)) {
            throw new Error('FS operation failed')
        }
        await fs.unlink(pathToFile);
    }
    catch(error){
        console.log(error.message);
    }
};

remove();