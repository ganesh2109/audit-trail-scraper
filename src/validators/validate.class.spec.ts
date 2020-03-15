import 'dotenv/config';
import { Logger } from '@nestjs/common';
import validate, { ValidationResult } from './validate.class';
import { MinLength } from 'class-validator';

// Disable the logging
Logger.overrideLogger(true);

class TestClass {
  @MinLength(10, { message: 'Invalid value' })
  public readonly name: string;
}

describe('Validator > Class', () => {
  it('Should report error when constraint not met', async done => {
    let validation: ValidationResult = await validate(TestClass, {
      name: '12345',
    });

    expect(validation.error).toEqual(true);
    expect(validation.results['name'].message).toEqual('Invalid value');
    done();
  });

  it('Should not report error when constraint met', async done => {
    let validation: ValidationResult = await validate(TestClass, {
      name: '1234567890',
    });

    expect(validation.error).toEqual(false);
    done();
  });
});
