// Funcion para hacer fetch de los datos
export const getPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  return data;
};

export const getPostById = async (id: number) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());
  return data;
};
