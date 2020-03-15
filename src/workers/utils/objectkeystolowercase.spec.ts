import 'dotenv/config';
import { Logger } from '@nestjs/common';
import objectKeysToLowerCase from './objectkeystolowercase';

// Disable the logging
Logger.overrideLogger(true);

describe('Workers > Utils > objectKeysToLowerCase', () => {
  it('Should convert keys to lowercase', () => {
    let input: any = {
      Hello: 'world',
      Nested: {
        Result: 'true',
      },
    };
    input = objectKeysToLowerCase(input);

    expect(input.hello).toEqual('world');
    expect(input.nested.result).toEqual('true');
  });
});
