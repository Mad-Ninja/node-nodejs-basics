import {
    createGzip
} from "zlib";
import {
    fileURLToPath
} from 'url';
import path from 'path';
import {
    createReadStream,
    createWriteStream
} from "fs";

const pathToFile = path.join(path.dirname(fileURLToPath(
    import.meta.url)), '/files/fileToCompress.txt');
const pathToGz = path.join(path.dirname(fileURLToPath(
    import.meta.url)), '/files/archive.gz');

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(pathToFile);
    const destination = createWriteStream(pathToGz);
    source.pipe(gzip).pipe(destination);
};

compress();