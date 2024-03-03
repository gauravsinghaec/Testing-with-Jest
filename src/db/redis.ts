import Redis from "ioredis";
export class RedisClient {
  client: Redis;
  constructor(config?: any) {
    this.client = new Redis(config);
  }
  async getValue(key: string) {
    const value = await this.client.get(key);
    return value;
  }
  async addValue(key: string, value: string) {
    const result = await this.client.set(key, value);
    return result;
  }
}
