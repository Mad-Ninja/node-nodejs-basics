import {
    createUnzip
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

export const decompress = async () => {
    const gzip = createUnzip();
    const source = createReadStream(pathToGz);
    const destination = createWriteStream(pathToFile);
    source.pipe(gzip).pipe(destination);
};

decompress();