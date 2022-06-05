export const parseArgs = () => {
    let args = process.argv.slice(2);
    let parsedArgs = '';
    for(let i = 0; i<args.length; i +=2){
        parsedArgs += `${args[i].slice(2)} is ${args[i+1]};`
    }
   console.log(parsedArgs);
};

parseArgs();