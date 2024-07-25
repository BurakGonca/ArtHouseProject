
import Header from "./components/Header";
import Main from "./components/Main";
import ExhibitionList from "./components/ExhibitionList";
import Forms from "./components/Forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import About from "./components/About";
import Contact from "./components/Contact";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Loading />} />
          <Route path="arthouse" element={<Header />}>
            <Route path="main" element={<Main />} />
            <Route
              path="/arthouse/forms"
              element={<PrivateRoute element={<Forms />} />}
            />
            <Route path="exhibitionlist" element={<ExhibitionList />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </AuthProvider>
  );
}


export default App;
