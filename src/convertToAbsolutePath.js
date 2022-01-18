import { cwd } from 'process';

const convert = (paths) => {
    const currentDirectory = cwd();
    if (paths.startsWith(currentDirectory)) {
        return paths;
    }
    return currentDirectory + '/' + paths;
}


export { convert };