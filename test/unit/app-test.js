import { it, describe } from 'mocha';
import { expect } from 'chai';
import { getMessage } from 'js/app';

describe('Main', function () {

  it('getMessage', function () {
    expect(getMessage()).to.equal('Hello world');
  });

});
