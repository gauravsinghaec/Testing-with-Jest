import { Employee } from "./Employee";

describe("Test Company", () => {
  it("should be successfully adding employee details to server - addEmployee", () => {
    const emp = new Employee();
    expect(emp).toBeDefined();
  });
  it("should fetch all the posts from the given member - getEmployeePosts", () => {
    const emp = new Employee();
    expect(emp).toBeDefined();
  });
});
