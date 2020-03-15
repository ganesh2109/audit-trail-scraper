export function format(label, values) {
  let result = label + '';

  for (let i = 0; i < values.length; i++) {
    result = result.split('{' + i + '}').join(values[i]);
  }

  return result;
}

export function isBlank(value): boolean {
  let isBlank = true;
  if (value != null && value.trim() != '') {
    isBlank = false;
  }
  return isBlank;
}

export function substringAfter(value: string, separator: string): string {
  let index = value.indexOf(separator);

  if (index > -1) {
    return value.substring(index + separator.length, value.length);
  } else {
    return '';
  }
}

export function isEmail(inputEmail: string): boolean {
  // See https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/using_regular_expressions_to_validate_email_addresses.htm
  let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return !!(inputEmail || '').toLowerCase().match(emailRegex);
}

export function escapeSingleQuotes(input: string): string {
  return input.replace(/'/g, "\\'");
}
