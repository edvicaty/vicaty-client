import axios from "axios";
let baseURL = "http://localhost:3000/auth";
process.env.NODE_ENV === "production"
  ? (baseURL = "https://vicaty.herokuapp.com/auth")
  : (baseURL = "http://localhost:3000/auth");

const authService = axios.create({
  baseURL,
  withCredentials: true,
});

authService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export const signup = async ({ username, email, password }) => {
  const user = await authService.post("/signup", {
    username,
    password,
    email,
  });
  return user;
};

export const login = async (userData) => {
  const { data: user } = await authService.post("/login", userData);
  return user;
};

export const getCurrentUser = async () => {
  const { data: user } = await authService.get("/currentuser");
  return user;
};

export const logoutP = async () => {
  await authService.get("/logout");
};

export const updatePhoto = async (image) => {
  await authService.put("/photo", { image });
};
