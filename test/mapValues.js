import mapValues from '../src/mapValues';
import chai, { expect } from 'chai';
chai.use(require('chai-shallow-deep-equal'));

describe('mapValue function', () => {
  it('should work correctly', () => {

    const inputObject = {
      first: 1,
      second: 2,
      third: 3
    };

    const tranform = val => val * 2;

    const expectedOutput = {
      first: 2,
      second: 4,
      third: 6
    };

    expect(mapValues(inputObject, tranform))
    .to.shallowDeepEqual(expectedOutput);

  });
});
