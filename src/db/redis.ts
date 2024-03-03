import Redis from "ioredis";
export class RedisClient {
  client: Redis;
  constructor(config?: any) {
    this.client = new Redis(config);
  }
  // with jest automock (redis.test.ts) - the class method (this.client.get , this.client.set) that will be replaced with mock functions and returns undefined
  async getPost(key: string) {
    const value = await this.client.get(key);
    return value;
  }
  async addEmployee(key: string, value: string) {
    await this.client.set(key, value);
    return true;
  }
}
