
import users from '../data/data.js'; 

const AuthService = {
  login: async (email, password) => {
    
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
     
    } 
    return user;
  },
  logout: () => {
    localStorage.removeItem("user");
  }
};

export default AuthService;
