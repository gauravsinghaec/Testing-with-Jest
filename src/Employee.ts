import { RedisClient } from "./db/redis";

const getRedisClient = () => {
  const redisConfig = { host: "localhost", port: 6379 };
  return new RedisClient(redisConfig);
};
export default class Employee {
  addEmployee = async (name: string, age: number) => {
    try {
      const redis = getRedisClient();
      const result = await redis.addValue(name, JSON.stringify({ name, age }));
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  async getEmployeePosts(name: string) {
    try {
      const redis = getRedisClient();
      return await redis.getValue(name);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
