declare module 'gamedig' {
  export function query(options: {
    type: string;
    host: string;
    port?: number;
  }): Promise<any>;
}
