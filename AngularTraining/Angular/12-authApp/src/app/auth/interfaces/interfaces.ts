export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  email?: string;
  msg?: string;
  token?: string;
}

export interface Usuario {
  uid: string;
  name: string;
  email: string;
}
