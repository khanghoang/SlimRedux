import pick from '../src/pick';
import chai, { expect } from 'chai';
chai.use(require('chai-shallow-deep-equal'));

describe('pick function', () => {
  it('should work correctly', () => {

    const inputObject = {
      first: 1,
      second: 2,
      third: 3
    };

    const transform = val => val > 2;

    const expectedOutput = {
      third: 3
    };

    expect(pick(inputObject, transform))
    .to.shallowDeepEqual(expectedOutput);

  });
});
