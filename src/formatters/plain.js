import _ from 'lodash';

const plain = (diffValues) => {
  const formatValue = (item) => {
    if (_.isObject(item) && item !== undefined) {
      return '[complex value]';
    }
    if (typeof item === 'string') {
      return `'${item}'`;
    }
    return item;
  };
  const iter = (diffValuesPrev, depth) => {
    const result = diffValuesPrev.flatMap((values) => {
      const { key, type, value } = values;
      const fullPath = depth ? [...depth, key].join('.') : key;
      if (type === 'NOT CHANGED') {
        if (value === undefined) {
          return iter(values.children, [...depth, key]);
        }
      } if (type === 'ADDED') {
        return `Property '${fullPath}' was added with value: ${formatValue(value)}`;
      } if (type === 'UPDATED') {
        return `Property '${fullPath}' was updated. From ${formatValue(values.previousValue)} to ${formatValue(values.newValue)}`;
      } if (type === 'DELETED') {
        return `Property '${fullPath}' was removed`;
      }
      return [];
    });
    return result.join('\n');
  };
  return iter(diffValues, []);
};

export default plain;
