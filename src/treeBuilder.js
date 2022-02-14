import _ from 'lodash';

const deleted = 'DELETED';
const added = 'ADDED';
const parent = 'PARENT';
const updated = 'UPDATED';
const notChanged = 'NOT CHANGED';

const buildDiff = (file1, file2) => {
  const allKeys = [..._.keys(file1), ..._.keys(file2)];
  const uniteKeys = _.sortBy(_.uniq(allKeys));
  const result = uniteKeys.map((key) => {
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        key,
        type: parent,
        children: buildDiff(file1[key], file2[key]),
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
  return result;
};

export default buildDiff;
