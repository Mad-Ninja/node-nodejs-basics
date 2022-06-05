import process from 'process';
import { config } from 'dotenv';
config();
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