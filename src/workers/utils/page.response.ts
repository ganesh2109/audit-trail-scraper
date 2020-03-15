export default class PageResponse {
  private data: any = undefined;
  private result: any = [];
  private title: string;
  private error: boolean = false;

  public constructor() {}

  public withTitle(title: string): PageResponse {
    this.title = title;
    return this;
  }

  public withData(data: any): PageResponse {
    this.data = data;
    return this;
  }

  public withValidation(result: any): PageResponse {
    this.result = result;
    this.error = result.error;
    return this;
  }

  public get(): any {
    // Convert the labels from the validation into a structure expected by the
    // page, but only do this for labels which are in the form {{ label_name }}
    for (let name in this.result.results) {
      let row = this.result.results[name];
      let message = row.message + '';
      if (row.error && message.startsWith('{{') && message.endsWith('}}')) {
        message = message.substring(2, message.length - 2);
        row.message = `messages.${message}`;
      }
    }

    // Determine if we should use the base title from the controller
    let title = this.title;

    if (this.data && this.data.title) {
      title = this.data.title;
    }

    // Set up the data structure the page expects
    return {
      values: this.data,
      validation: this.result.results,
      title: title,
      error: this.error,
    };
  }
}
