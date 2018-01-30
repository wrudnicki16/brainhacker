export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user
  });
};
export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: user
  });
};
export const logout = () => {
  console.log("hi");
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
};
