import users from '../data/data.js'; 

const AuthService = {
  login: async (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return true;  // Başarılı giriş
    }
    
    return false;  // Başarısız giriş
  },
  logout: () => {
    localStorage.removeItem("user");
  }
};

export default AuthService;
