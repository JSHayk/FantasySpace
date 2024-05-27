export interface Config {
  port: number | undefined;
  sync_interval: number | undefined;
  db: {
    username: string;
    password: string;
    host: string;
    name: string;
  };
  token: {
    secret_key: string;
  };
}
