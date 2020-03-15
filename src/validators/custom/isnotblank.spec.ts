import 'dotenv/config';
import { Logger } from '@nestjs/common';
import validate, { ValidationResult } from '../validate.class';
import { IsNotBlank } from './isnotblank';

// Disable the logging
Logger.overrideLogger(true);

class TestClass {
  @IsNotBlank('name', { message: 'Invalid value' })
  public readonly name: string;
}

describe('Validators > IsNotBlank', () => {
  it('Zero-length string should indicate an error', async done => {
    let validation: ValidationResult = await validate(TestClass, {
      name: '',
    });

    expect(validation.error).toEqual(true);
    expect(validation.results['name'].message).toEqual('Invalid value');
    done();
  });

  it('Blank string should indicate an error', async done => {
    let validation: ValidationResult = await validate(TestClass, {
      name: '  ',
    });

    expect(validation.error).toEqual(true);
    expect(validation.results['name'].message).toEqual('Invalid value');
    done();
  });

  it('Non-blank string should not indicate an error', async done => {
    let validation: ValidationResult = await validate(TestClass, {
      name: 'hello world',
    });

    expect(validation.error).toEqual(false);
    expect(validation.results['name']).toEqual(undefined);
    done();
  });
});
