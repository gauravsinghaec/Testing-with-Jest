import { Company } from "../Company";
jest.mock("../Employee", () => {
  return function () {
    return { getEmployeePosts: () => "Test", addEmployee: () => "Successfull" };
  };
});

describe("Test Company", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should onboard new associate - employeeOnboarding", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    const result = await c.employeeOnboarding("Joe", 26);
    expect(result).toBeDefined();
    expect(result).toBe("Successfull");
  });
  it("should get posts from given member - getPost", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    const posts = await c.getPost("Joe");
    expect(posts).toBe("Test");
  });
});
