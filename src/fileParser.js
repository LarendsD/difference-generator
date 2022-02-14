import * as jsyaml from 'js-yaml';

const parser = (fileData, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileData);
    case 'yaml':
    case 'yml':
      return jsyaml.load(fileData);
    default:
      throw new Error(`extension ${format} is not supported`);
  }
};

export default parser;
