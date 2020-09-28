import axios from "axios";
let baseURL = "http://localhost:3000/user";
process.env.NODE_ENV === "production"
  ? (baseURL = "https://vicaty.herokuapp.com/user")
  : (baseURL = "http://localhost:3000/user");

const userService = axios.create({
  baseURL,
  withCredentials: true,
});
userService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export const viewProjects = async () => {
  const projects = await userService.get("/");
  return projects;
};
export const createProject = async ({ projectName }) => {
  const newProject = await userService.post("/", {
    projectName,
  });
  return newProject;
};
export const deleteProject = async (projectId) => {
  console.log(`iddddd`, projectId);
  const message = await userService.delete(`/project/${projectId}`);
  console.log(`messageee`, message);
  return message;
};
export const createModel = async (createdModelName, projectId, description) => {
  const newModel = await userService.post(`/model/${projectId}`, {
    createdModelName,
    description,
  });
  return newModel;
};

export const viewProject = async (projectId) => {
  const project = await userService.get(`/project/${projectId}`);
  return project;
};

export const editProject = async (projectId, projectName) => {
  const project = await userService.put(`/project/${projectId}`, {
    projectName,
  });
  return project;
};

export const duplicateProject = async (projectId, projectName) => {
  const project = await userService.post(`/duplicateProject/${projectId}`, {
    projectName,
  });
  return project;
};

export const viewModel = async (modelId) => {
  const model = await userService.get(`/model/${modelId}`);
  return model;
};

export const editModel = async (modelId, createdModelName, description) => {
  const model = await userService.put(`/model/${modelId}`, {
    createdModelName,
    description,
  });
  return model;
};
export const deleteCreatedModel = async (modelId) => {
  const message = await userService.delete(`/model/${modelId}`);
  return message;
};
