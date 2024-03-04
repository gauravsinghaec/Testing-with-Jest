import Employee from "../Employee";
import { Company } from "../Company";
// We can use this to mock the implementation as per our test need
const mockGetPost = jest.fn();
const mockAddEmp = jest.fn();
jest.mock("../Employee", () => {
  return jest.fn().mockImplementation(() => {
    return { getEmployeePosts: mockGetPost, addEmployee: mockAddEmp };
  });
});

describe("Test Company", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should onboard new associate - employeeOnboarding", async () => {
    const c = new Company("Linkedin", 20000, "Social Media");
    const result = await c.employeeOnboarding("Joe", 26);
    expect(result).toBeUndefined();
  });
  it("should call Employee construction - getPost", async () => {
    mockGetPost.mockResolvedValueOnce("Done");
    const c = new Company("Linkedin", 20000, "Social Media");
    const posts = await c.getPost("Joe");
    expect(Employee).toHaveBeenCalledTimes(1);
  });
  it("should get posts from given member - getPost", async () => {
    mockGetPost.mockResolvedValueOnce("Done");
    const c = new Company("Linkedin", 20000, "Social Media");
    const posts = await c.getPost("Joe");
    // the below assertion will pass as the mocked factory module is an HOF which return a jest func
    // that can be spied upon.
    expect(mockGetPost).toHaveBeenCalledTimes(1);
    expect(mockGetPost).toHaveBeenCalledWith("Joe");
    expect(posts).toBe("Done");
  });
  it("should get error if getEmployeePosts throws error - getPost", async () => {
    mockGetPost.mockRejectedValueOnce("failed");
    const c = new Company("Linkedin", 20000, "Social Media");
    try {
      await c.getPost("Joe");
    } catch (e) {
      expect(e).toBe("failed");
    }
  });
});
