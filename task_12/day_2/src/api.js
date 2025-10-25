export const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  return json;
};
