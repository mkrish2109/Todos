export function fetchHelper(url, method, body) {

  let options = {};

  if (method === "POST" || method === "PATCH") {
    options = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  }

  if (method === "DELETE") {
    options = { method: method };
  }
  const promise = fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error(error.massage);
    });
  return promise;
}
