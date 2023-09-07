import Banner from "./components/Banner";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Discount from "./components/Discount";

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Landing />
      <Categories />
      <Products />
      <Discount />
    </div>
  );
}

export default App;
