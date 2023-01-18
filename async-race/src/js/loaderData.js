async function loaderData(dir, method, body) {
  const url = `http://localhost:3000/${dir}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}

export default loaderData;
