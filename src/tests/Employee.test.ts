import { RedisClient } from "../db/redis";
import Employee from "../Employee";
const mockAddValue = jest.fn();
jest.mock("../db/redis", () => {
  return {
    // Here this factory return and object with same as the class export name,
    // bacause the redis db export is not a default class exports e.g export class RedisClient {...}
    RedisClient: function () {
      return {
        getValue: () => "Mocked value",
        addValue: mockAddValue,
      };
    },
  };
});

describe("Test Company", () => {
  beforeEach(() => {
    mockAddValue.mockClear();
  });
  it("should call RedisClient construction - addEmployee", async () => {
    const emp = new Employee();
    const result = await emp.addEmployee("RRR", 27);
    // the below assertion will fail as the mocked factory module is an HOF which return a normal fucntion (instead of jest func)
    // that does not provide a way to spy on calls.
    // Error : value must be a mock or spy function
    expect(RedisClient).toHaveBeenCalledTimes(1);
  });
  it("should be successfully adding employee details to server - addEmployee", async () => {
    mockAddValue.mockResolvedValueOnce("ok");
    const emp = new Employee();
    const result = await emp.addEmployee("RRR", 27);
    expect(mockAddValue).toHaveBeenCalledTimes(1);
    expect(mockAddValue).toHaveBeenCalledWith(
      "RRR",
      JSON.stringify({ name: "RRR", age: 27 })
    );
    expect(result).toBeDefined();
    expect(result).toStrictEqual("ok");
  });
  it("should fetch all the posts from the given member - getEmployeePosts", async () => {
    const emp = new Employee();
    const result = await emp.getEmployeePosts("RRR");
    expect(result).toBeDefined();
    expect(result).toBe("Mocked value");
  });
});
