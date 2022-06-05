import fs from 'fs/promises';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';


const filesFolder = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/');

export const list = async () => {
    try{

        if (!existsSync(filesFolder)) {
            throw new Error('FS operation failed')
        }
        const names = [];
        const files = await fs.readdir(filesFolder);

        for (const file of files) {
            names.push(file);
        }
        console.log(names);
    }
    catch(error){
        console.log(error.message);
    }
};

list();