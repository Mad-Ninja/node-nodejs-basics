import fs from 'fs/promises';
import {fileURLToPath} from 'url';
import  path  from 'path';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile =  path.join(__dirname, '/files/fresh.txt')

export const create = async () => {

    try {      
        const content = 'I am fresh and young'
        await fs.writeFile(pathToFile, content, {flag:'wx'})
            
      } catch (error) {
        if(error.code === 'EEXIST'){
            throw new Error('FS operation failed');
        }  
        console.error(`Got an error trying to write to a file: ${error.message}`);
      }
};

create()