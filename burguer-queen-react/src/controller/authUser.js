const authUser = (email, password) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email,
      password,
    },
  }
  return fetch("http://localhost:5000/auth", options).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
};

export default authUser;
