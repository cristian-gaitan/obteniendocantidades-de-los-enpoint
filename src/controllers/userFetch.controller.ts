export const getUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return data;
};

export const getUserById = async (id: number) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());
  return data;
};
