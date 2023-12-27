import { TypeGenerator } from './lib/type-generator';

export const generateTypes = (json: string, rootName: string = 'Root') => {
  return new TypeGenerator(json, rootName);
};
