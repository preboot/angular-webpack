export class User {
  id: number;
  email: string;
  password: string;

  constructor(object: Object) {
    Object.assign(this, object);
  }
}
