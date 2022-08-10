const BASE_URL = "https://api.akilliticaretim.com/api";

export const login = () => {
  return fetch(`${BASE_URL}/Auth/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      GUID: "0739-E657-C4F4-98B4",
    },
    body: JSON.stringify({
      userName: "user",
      password: "123456",
    }),
  });
};

export const fetchProducts = (page, token) => {
  return fetch(`${BASE_URL}/Product/ListProducts/${0}`, {
    headers: {
      Authorization: "Bearer " + token,
      GUID: "0739-E657-C4F4-98B4",
    },
  });
};

export const fetchCategories = (page, token) => {
  return fetch(`${BASE_URL}/Product/ListCategories/${""}`, {
    headers: {
      Authorization: "Bearer " + token,
      GUID: "0739-E657-C4F4-98B4",
    },
  });
};
