import { RedisClient } from "../../db/redis";
jest.mock("ioredis", () => {
  return function () {
    return { get: () => "Retrieved", set: () => "Added" };
  };
});

describe("Test redis", () => {
  it("should be successfully adding employee details to redis - addEmployee", async () => {
    const redisClient = new RedisClient({ host: "localhost", port: 6379 });
    const result = await redisClient.addValue(
      "RRR",
      '{ name: "RRR", age: 27 }'
    );
    expect(result).toBe("Added");
  });
  it("should fetch values for the given key - getPost", async () => {
    const redisClient = new RedisClient({ host: "localhost", port: 6379 });
    const result = await redisClient.getValue("RRR");
    expect(result).toBe("Retrieved");
  });
});
