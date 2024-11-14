import { User } from "../interface/users.interface";

export const mapUserData = async (users: User[]) => {
  const mapUser = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
    };
  });

  return mapUser;
};
