import Employee from "../Employee";
jest.mock("../db/redis", () => {
  return {
    // Here this factory return and object with same as the class export name,
    // bacause the redis db export is not a default class exports e.g export class RedisClient {...}
    RedisClient: function () {
      return {
        getValue: () => "Mocked value",
        addValue: () => ({ status: "ok" }),
      };
    },
  };
});

describe("Test Company", () => {
  it("should be successfully adding employee details to server - addEmployee", async () => {
    const emp = new Employee();
    const result = await emp.addEmployee("RRR", 27);
    expect(result).toBeDefined();
    expect(result).toStrictEqual({ status: "ok" });
  });
  it("should fetch all the posts from the given member - getEmployeePosts", async () => {
    const emp = new Employee();
    const result = await emp.getEmployeePosts("RRR");
    expect(result).toBeDefined();
    expect(result).toBe("Mocked value");
  });
});
