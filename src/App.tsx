import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyle/>
    </BrowserRouter>
  );
};

export default App;
