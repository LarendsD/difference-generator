import * as jsyaml from 'js-yaml';

const parser = (fileData, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(fileData);
    case 'yaml':
    case 'yml':
      return jsyaml.load(fileData);
    default:
      throw new Error(`extension ${extension} is not supported`);
  }
};

export default parser;
