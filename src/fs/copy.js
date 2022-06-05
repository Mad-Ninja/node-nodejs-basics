import fs from 'fs/promises';
import {existsSync} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';


let copyFrom = path.join(path.dirname(fileURLToPath(
    import.meta.url)), '/files/');
let copyTo = path.join(path.dirname(fileURLToPath(
    import.meta.url)), '/files_copy/');
console.log(copyFrom)

export const copy = async () => {
    try {
        if (!existsSync(copyFrom) || existsSync(copyTo)) {
            throw new Error('FS operation failed')
        }

        const files = await fs.readdir(copyFrom);
        fs.mkdir(copyTo);
        for (const file of files) {
            const fromPath = path.join(copyFrom, file);
            const toPath = path.join(copyTo, file);
            fs.copyFile(fromPath, toPath)
        }


    } catch (error) {
        console.log(error.message)
    }
};

copy();