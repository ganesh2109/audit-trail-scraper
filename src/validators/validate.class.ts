import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export interface ValidationResult {
  error: boolean;
  results: Results;
}

export interface Results {
  [key: string]: Name;
}

export interface Name {
  error: boolean;
  message: string;
}

export default async function(type: any, data: any): Promise<ValidationResult> {
  let c = plainToClass(type, data);
  let classValidationResult = await validate(c);
  let error = false;

  let results = {};
  classValidationResult.forEach(row => {
    let message;
    for (let prop in row.constraints) {
      message = row.constraints[prop];
      break;
    }

    if (message) {
      error = true;
    }

    results[row.property] = {
      error: !!message,
      message: message,
    };
  });

  return {
    error,
    results,
  };
}
