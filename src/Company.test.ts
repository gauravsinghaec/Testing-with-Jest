import { Company } from "./Company";

describe("Test Company", () => {
  it("should onboard new associate - employeeOnboarding", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    await c.employeeOnboarding("Joe", 26);
    expect(c).toBeDefined();
  });
  it("should get posts from given member - getPost", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    await c.getPost("Joe");
    expect(c).toBeDefined();
  });
});
