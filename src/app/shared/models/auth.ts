export interface signIn {
  email: string;
  password: string;
}

export interface signUp extends signIn{
  name: string;
  rePassword: string;
  dateOfBirth: string;
  gender: string;
}
