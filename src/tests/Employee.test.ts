import Employee from "../Employee";
jest.mock("../db/redis");

describe("Test Company", () => {
  it("should be successfully adding employee details to server - addEmployee", async () => {
    const emp = new Employee();
    const result = await emp.addEmployee("RRR", 27);
    expect(emp).toBeDefined();
  });
  it("should fetch all the posts from the given member - getEmployeePosts", async () => {
    const emp = new Employee();
    const result = await emp.getEmployeePosts("RRR");
    expect(emp).toBeDefined();
  });
});
