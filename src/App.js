import "./sass/app.sass";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext();
function App() {
  const [searchPizza, setSearchPizza] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchPizza, setSearchPizza }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
