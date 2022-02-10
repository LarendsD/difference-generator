import _ from 'lodash';

const space = ' ';

const formatValue = (value, depth) => {
  if (_.isObject(value)) {
    const result = Object.keys(value).map((key) => `${space.repeat(depth + 6)}  ${key}: ${formatValue(value[key], depth + 4)}`);
    return ['{', ...result, `${space.repeat(depth + 4)}}`].join('\n');
  }
  return value;
};

function stylish(diffValues) {
  const iter = (diffValuesPrev, depth) => {
    const formattedResult = diffValuesPrev.map((values) => {
      const { key, type, value } = values;
      if (type === 'NOT CHANGED') {
        if (value === undefined) {
          return `${space.repeat(depth + 3)} ${key}: ${iter(values.children, depth + 4)}`;
        }
        return `${space.repeat(depth + 2)}  ${key}: ${value}`;
      } if (type === 'ADDED') {
        return `${space.repeat(depth + 2)}+ ${key}: ${formatValue(value, depth)}`;
      } if (type === 'DELETED') {
        return `${space.repeat(depth + 2)}- ${key}: ${formatValue(value, depth)}`;
      }
      return `${space.repeat(depth + 2)}- ${key}: ${formatValue(values.previousValue, depth)}\n${space.repeat(depth + 2)}+ ${key}: ${formatValue(values.newValue, depth)}`;
    });
    return ['{', ...formattedResult, `${space.repeat(depth)}}`].join('\n');
  };
  return iter(diffValues, 0);
}

export default stylish;