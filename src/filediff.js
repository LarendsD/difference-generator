import { readFileSync } from 'fs';
import _ from 'lodash';

const onlyInFile1 = '-'
const onlyInFile2 = '+'
 
function genDiff(filepath1, filepath2) {
    const json1 = JSON.parse(readFileSync(filepath1, 'utf8'));
    const json2 = JSON.parse(readFileSync(filepath2, 'utf8'));
    const sortedJson1 = _.sortBy(Object.entries(json1));
    const sortedJson2 = _.sortBy(Object.entries(json2));
    let result = `{\n`;
    for (const [key1, value1] of sortedJson1) {
        for (const [key2, value2] of sortedJson2) {
            if (key1 === key2 && value1 === value2) {
                result += (`    ${key1}: ${value1}\n`);
            }
        }
        if (!result.includes(`    ${key1}: ${value1}\n`)) {
            result += (`  ${onlyInFile1} ${key1}: ${value1}\n`);
        }
    }
    for (const [key2, value2] of sortedJson2) {
        if (!result.includes(`    ${key2}: ${value2}`)) {
            result += (`  ${onlyInFile2} ${key2}: ${value2}\n`);
        }
    }
    result += '}';
    return result;
}

export { genDiff };