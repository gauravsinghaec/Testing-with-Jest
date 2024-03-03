import Employee from "../Employee";
import { Company } from "../Company";
jest.mock("../Employee");

describe("Test Company", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    // @ts-ignore
    Employee.mockClear();
  });
  it("should onboard new associate - employeeOnboarding", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    const result = await c.employeeOnboarding("Joe", 26);
    expect(c).toBeDefined();
    expect(result).toBe(true);
  });
  it("should get posts from given member - getPost", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    const posts = await c.getPost("Joe");
    // @ts-ignore
    const emp = Employee.mock.instances[0];
    expect(emp.getEmployeePosts).toHaveBeenCalledTimes(1);
    expect(posts).toBeUndefined();
  });
});
