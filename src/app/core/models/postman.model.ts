export class Postman {
  info: Info = {} as Info;
  item: Item[] = [];
}

class Info {
  _postman_id: string = '';
  name: string = '';
  schema: string = '';
  _exporter_id: string = '';
}

class Item {
  name: string = '';
  request: Request = {} as Request;
  response: [] = [];
}

class Request {
  method: string = '';
  header: Header[] = [];
  url: Url = {} as Url;
}

class Header {
  key: string = '';
  value: string = '';
  type: string = '';
}

class Url {
  raw: string = '';
  protocol: string = '';
  host: string[] = [];
  port: string = '';
  path: string[] = [];
}
