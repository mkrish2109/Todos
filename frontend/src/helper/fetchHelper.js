export function fetchHelper(url, isProtected, method, body) {
  let options = {};

  const userObj = JSON.parse(localStorage.getItem("user"));
  const token = userObj && userObj.token;

  if (isProtected && !token) {
    throw new Error("No token present!");
  }

  if (method === "POST" || method === "PATCH") {
    options = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (isProtected) {
      options.headers.authorization = "Bearer " + token;
    }
  }

  if (method === "DELETE") {
    options = { method: method };
    if (isProtected) {
      options.headers = {
        authorization: "Bearer " + token,
      };
    }
  }

  if (isProtected && !options.headers?.authorization) {
    options.headers = { authorization: "Bearer " + token };
  }

  const promise = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.message);
    });

  return promise;
}
