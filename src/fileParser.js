import * as jsyaml from 'js-yaml';

const parser = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return jsyaml.load(data);
    default:
      throw new Error(`extension ${format} is not supported`);
  }
};

export default parser;
