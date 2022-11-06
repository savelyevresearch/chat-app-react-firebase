import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./style.scss"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/signin'/>
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="signup" element={<Register/>}/>
          <Route path="signin" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
