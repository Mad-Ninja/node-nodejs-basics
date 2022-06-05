import {
    Transform
} from 'stream'

export const transform = async () => {
    const transformStream = new Transform({
        transform(data, encoding, callback) {
            this.push(data.toString().split("").reverse().join(""))
            callback()
        }
    })
    process.stdin.pipe(transformStream).pipe(process.stdout)
    process.stdin.resume();
};

transform()