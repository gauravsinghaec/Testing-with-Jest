import { RedisClient } from "../../db/redis";
jest.mock("ioredis");

describe("Test redis", () => {
  it("should be successfully adding employee details to redis - addEmployee", async () => {
    const redisClient = new RedisClient({ host: "localhost", port: 6379 });
    const result = await redisClient.addEmployee(
      "RRR",
      '{ name: "RRR", age: 27 }'
    );
    expect(result).toBe(true);
  });
  it("should fetch values for the given key - getPost", async () => {
    const redisClient = new RedisClient({ host: "localhost", port: 6379 });
    const result = await redisClient.getPost("RRR");
    expect(result).toBeUndefined();
  });
});
