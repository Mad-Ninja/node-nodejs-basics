import fs from 'fs/promises';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const beforeRename = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/wrongFilename.txt');
const afterRename = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/properFilename.md');

export const rename = async () => {
    try {
        if (!existsSync(beforeRename) || existsSync(afterRename)) {
            throw new Error('FS operation failed')
        }
        fs.rename(beforeRename, afterRename)

    } catch (error) {
        console.log(error.message)
    }
};

rename();