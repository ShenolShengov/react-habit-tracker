const endpoints = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  user: {
    me: "/me",
  },
  habits: {
    base: "/habits",
    byId: (id) => `/habits/${id}`,
  },
};
export default endpoints;
