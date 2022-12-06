import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./views/Home/Home";
import { Catalog } from "./views/Catalog/Catalog";
import { Search } from "./views/Search/Search";
import { Cart } from "./views/Cart/Cart";
import { Profile } from "./views/Profile/Profile";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
