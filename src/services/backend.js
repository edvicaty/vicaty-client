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
export const createModel = async (createdModelName, projectId) => {
  const newModel = await userService.post(`/model/${projectId}`, {
    createdModelName,
  });
  return newModel;
};
export const viewProject = async (projectId) => {
  const project = await userService.get(`/project/${projectId}`);
  return project;
};
export const viewModel = async (modelId) => {
  const model = await userService.get(`/model/${modelId}`);
  return model;
};
export const deleteCreatedModel = async (modelId) => {
  const message = await userService.delete(`/model/${modelId}`);
  return message;
};

export const createElement = async (elementName, modelId, userId) => {
  const updatedModel = await userService.post(`/element/create/${modelId}`, {
    userId,
    elementName,
  });
  return updatedModel;
};
export const addSingle = async ({ data }, modelId, elementName, userId) => {
  const updatedElement = await userService.post(
    `/element/addSingle/${modelId}/${elementName}`,
    {
      userId,
      value: data,
    }
  );
  return updatedElement;
};

export const deleteSingleData = async (
  modelId,
  elementName,
  dataId,
  userId
) => {
  const updatedElement = await userService.post(
    `/element/deleteSingle/${modelId}/${elementName}/${dataId}`,
    {
      userId,
    }
  );
  return updatedElement;
};

export const getElement = async (elementName, modelId, userId) => {
  const element = await userService.post(
    `/element/getSingle/${modelId}/${elementName}`,
    {
      userId,
    }
  );
  return element;
};

export const updateSingle = async (
  modelId,
  elementName,
  dataId,
  { data: value },
  userId
) => {
  const updatedElement = await userService.put(
    `/element/updateSingle/${modelId}/${elementName}/${dataId}`,
    {
      userId,
      value,
    }
  );
  return updatedElement;
};
