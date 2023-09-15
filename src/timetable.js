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

async function verifyEmail(data) {
  const response = await fetch("http://localhost:3000/api/verifyUser/" + data, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return response;
}

async function sendRequest(data) {
  console.log(data);
  fetch("http://localhost:3000/api/sendRequest/", {
    method: "PUT",
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
export { findUser, addUser, verifyEmail, sendRequest };
