import Redis from "ioredis";
export default class RedisClient {
  client: Redis;
  constructor(config?: any) {
    this.client = new Redis(config);
  }
  getPost = async (key: string) => {
    const value = await this.client.get(key);
    return value;
  };
  addEmployee = async (key: string, value: string) => {
    await this.client.set(key, value);
  };
}
