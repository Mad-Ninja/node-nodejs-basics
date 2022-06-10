import process from 'process';

export const parseEnv = () => {
 
    const envVariables = process.env
    let parsedVariables = '';
    for (let variable in envVariables) {
        if (variable.startsWith('RSS_')) {
            parsedVariables += `${variable}=${envVariables[variable]};`
        }
    }
    console.log(parsedVariables)
};
parseEnv();