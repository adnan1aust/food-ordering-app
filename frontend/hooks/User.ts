import { CreateUserRequest } from "../types/User";

const createUser = async (userData: CreateUserRequest) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/my/user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    //console.log(error);
  }
};

export default createUser;
