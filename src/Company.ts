import { Employee } from "./Employee";
export class Company {
  name: string;
  size: number;
  industry: string;
  constructor(name: string, size: number, industry: string) {
    this.name = name;
    this.size = size;
    this.industry = industry;
  }
  employeeOnboarding = async (name: string, age: number) => {
    const emp = new Employee();
    await emp.addEmployee(name, age);
  };
  getPost = async (name: string) => {
    const emp = new Employee();
    const posts = await emp.getEmployeePosts(name);
    return posts;
  };
}
