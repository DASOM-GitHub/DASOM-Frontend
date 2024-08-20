const getCurrentUser = () => {
    return localStorage.getItem("assess_token");
  };
  const AuthService = {
    getCurrentUser
  };