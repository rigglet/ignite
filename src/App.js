//components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
//routes
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Nav />
        <Home />
      </Route>
    </div>
  );
}

export default App;
