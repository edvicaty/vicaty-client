import axios from "axios";

const baseURL = "http://localhost:3002/user";
const userService = axios.create({
  baseURL,
  withCredentials: false,
});
userService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

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
