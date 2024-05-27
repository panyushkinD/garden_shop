import {Route, Routes} from "react-router-dom";
import AuthPage from "./components/account_manager/AuthPage";
import RegistorPage from "./components/account_manager/RegistorPage";
import Main from "./components/pages/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/123" element={<Main/>} />
        <Route path="/" element={<Header/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/register" element={<RegistorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
