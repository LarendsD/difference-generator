import _ from 'lodash';
import chooseFormat from './index.js';

const deleted = 'DELETED';
const added = 'ADDED';
const parent = 'PARENT';
const updated = 'UPDATED';
const notChanged = 'NOT CHANGED';

const genDiff = (file1, file2, depth = 0, format = 'stylish') => {
  const allKeys = [..._.keys(file1), ..._.keys(file2)];
  const uniteKeys = _.sortBy(_.uniq(allKeys));
  const result = uniteKeys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        key,
        type: parent,
        children: genDiff(file1[key], file2[key], depth + 1),
      };
    } if (_.has(file1, key) && !_.has(file2, key)) {
      return {
        key,
        type: deleted,
        value: file1[key],
      };
    } if (!_.has(file1, key) && _.has(file2, key)) {
      return {
        key,
        type: added,
        value: file2[key],
      };
    } if (file1[key] !== file2[key]) {
      return {
        key,
        type: updated,
        previousValue: file1[key],
        newValue: file2[key],
      };
    }
    return {
      key,
      type:
      notChanged,
      value: file1[key],
    };
  });
  if (depth === 0) {
    return chooseFormat(result, format);
  }
  return result;
};

export default genDiff;
