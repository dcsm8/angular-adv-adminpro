export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public img?: string,
    public google?: boolean,
    public password?: string,
    public role?: string,
    public uid?: string
  ) {}
}
