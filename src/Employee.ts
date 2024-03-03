import RedisClient from "./db/redis";

const getRedisClient = () => {
  const redisConfig = { host: "localhost", port: 6379 };
  return new RedisClient(redisConfig);
};
export class Employee {
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
  getEmployeePosts = async (name: string) => {
    try {
      const redis = getRedisClient();
      return await redis.getPost(name);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}
