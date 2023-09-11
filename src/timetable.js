async function findUser(id) {
  const uri = "http://localhost:3000/api/verify/" + id;
  const result = await fetch(uri, { method: "GET" });
  console.log(result);
  return result.json();
}

async function addUser(data) {
  fetch("http://localhost:3000/api/add/", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
export { findUser, addUser };
