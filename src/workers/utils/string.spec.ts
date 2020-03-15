import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { format, isBlank, substringAfter, isEmail } from './string';

// Disable the logging
Logger.overrideLogger(true);

describe('Workers > Utils > String', () => {
  it('Should format string correctly', () => {
    let output = format('first {0} second {1} first {0}', ['1', '2']);
    expect(output).toEqual('first 1 second 2 first 1');
  });

  it('Should indicate string is blank with single space', () => {
    let result = isBlank(' ');
    expect(result).toEqual(true);
  });

  it('Should indicate string is blank with zero-length string', () => {
    let result = isBlank('');
    expect(result).toEqual(true);
  });

  it('Should indicate string is blank with multiple spaces', () => {
    let result = isBlank('  ');
    expect(result).toEqual(true);
  });

  it('Should indicate string is blank with null', () => {
    let result = isBlank(null);
    expect(result).toEqual(true);
  });

  it('Should indicate string is blank with undefined', () => {
    let result = isBlank(undefined);
    expect(result).toEqual(true);
  });

  it('Should substringAfter correct position', () => {
    let result = substringAfter('hello world', ' ');
    expect(result).toEqual('world');
  });

  it('Should return empty string for substringAfter with invalid value', () => {
    let result = substringAfter('hello world', 'invalid');
    expect(result).toEqual('');
  });

  it('Should report valid for valid email', () => {
    let result = isEmail('test@hello.com');
    expect(result).toEqual(true);
  });

  it('Should report invalid for invalid email', () => {
    let result = isEmail('test@hello@.com');
    expect(result).toEqual(false);
  });
});
