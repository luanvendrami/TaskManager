import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MyRoutes } from "./routes/MyRoutes";
import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes>
        <Home />
        <GlobalStyle />
      </MyRoutes>
    </BrowserRouter>
  );
};

export default App;
