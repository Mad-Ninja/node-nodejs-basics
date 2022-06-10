import fs from 'fs/promises';
import {fileURLToPath} from 'url';
import path from 'path';
import crypto from 'crypto'

const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const fileBuffer = await fs.readFile(pathToFile);
    const hashSum = crypto.createHash('SHA256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    return hex;
};

console.log(await calculateHash());