import chai, { expect } from 'chai';
import pick from '../src/pick';
chai.use(require('chai-shallow-deep-equal'));

describe('pick function', () => {
  it('should work correctly', () => {

    const inputObject = {
      first: 1,
      second: 2,
      third: 3
    };

    const tranform = val => val > 2;

    const expectedOutput = {
      third: 3
    };

    expect(pick(inputObject, tranform))
    .to.shallowDeepEqual(expectedOutput);

  });
});
