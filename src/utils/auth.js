export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");

  return user && isLoggedIn === "true" && token;
};

export const getUserData = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
};

export const login = (userData, token = "authenticated") => {
  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("token", token);
  localStorage.setItem("isLoggedIn", "true");
};
