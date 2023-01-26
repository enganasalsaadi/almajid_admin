import Layout from "./components/template/layout/Layout";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitPage from "./pages/InitPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import { useSelector } from "react-redux";
import Header from "./components/template/Header/Header";
function App() {
  const { userDetails } = useSelector((state: any) => state.auth);

  return (
    <Layout>
      <Router>
        {userDetails&&<Header />}

        <Routes>
          <Route path="/" element={<InitPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={userDetails ? true : false}>
                <DashboardPage />
              </Protected>
            }
          />
          <Route
            path="/users"
            element={
              <Protected isSignedIn={userDetails ? true : false}>
                <UsersPage />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
