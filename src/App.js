import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import NotFound from "./Shared/NotFound/NotFound";
import CheckOut from "./Pages/CheckOut/CheckOut";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import PasswordReset from "./Pages/SignIn/PasswordReset/PasswordReset";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route
          path="/passwordReset"
          element={<PasswordReset></PasswordReset>}
        ></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
