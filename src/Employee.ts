import RedisClient from "./db/redis";

const getRedisClient = () => {
  const redisConfig = { host: "localhost", port: 6379 };
  return new RedisClient(redisConfig);
};
export default class Employee {
  // with jest automock - this class method(arrow function) will not be part of the mocks
  addEmployee = async (name: string, age: number) => {
    try {
      const redis = getRedisClient();
      await redis.addEmployee(name, JSON.stringify({ name, age }));
      return;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  // with jest automock - this class method that will be replaced with mock functions and returns undefined
  async getEmployeePosts(name: string) {
    try {
      const redis = getRedisClient();
      return await redis.getPost(name);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
