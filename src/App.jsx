import Home from "./pages/Home";
import Places from "./pages/places";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePlace from "./pages/CreatePlace";
import CreatePlaceAdmin from "./pages/CreatePlace/Admin";
import CreatePlaceClient from "./pages/CreatePlace/Client";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="places" element={<Places />}>
          <Route path="create" element={<CreatePlace />}>
            <Route path="admin" element={<CreatePlaceAdmin />} />
            <Route path="client" element={<CreatePlaceClient />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
