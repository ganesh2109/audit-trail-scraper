import PageResponse from './page.response';

export class BaseController {
  public respond(): PageResponse {
    return new PageResponse();
  }
}
