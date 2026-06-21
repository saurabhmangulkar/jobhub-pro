import API from "./api";

export const loginUser = async (loginData) => {

  const response = await API.post(
    "/auth/login",
    loginData
  );

  return response.data;
};

export const registerUser = async (data) => {

  const response = await API.post(
    "/auth/register",
    data
  );

  return response.data;
};