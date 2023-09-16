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
  console.log("called in timetable");
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

async function getAllData(user) {
  const userData = await fetch("http://localhost:3000/api/User/" + user, {
    method: "GET",
  }).then((response) => response.json());
  console.log(userData);
  return userData;
}

async function acceptUser(data) {
  const response = await fetch("http://localhost:3000/api/accept/", {
    method: "PUT",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    console.log(response);
  });
  return response;
}
async function rejectUser(data) {
  const response = await fetch("http://localhost:3000/api/reject/", {
    method: "PUT",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    console.log(response);
  });
  return response;
}
export {
  findUser,
  addUser,
  verifyEmail,
  sendRequest,
  getAllData,
  acceptUser,
  rejectUser,
};
