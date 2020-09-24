import axios from "axios";

const baseURL = "http://localhost:3000/user";
const userService = axios.create({
  baseURL,
  withCredentials: true,
});

export const viewProjects = async () => {
  const projects = await userService.get("/");
  return projects;
};
// export const viewProjects = async ({ username, password, campus, course }) => {
//   await userService.get("/", {
//     username,
//     password,
//     campus: campus[0],
//     course: course[0],
//   });
//   return true;
// };
