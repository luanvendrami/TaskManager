import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ListaTarefas } from "./pages/ListaTarefas/ListaTarefas";
import { MyRoutes } from "./routes/MyRoutes";
import { GlobalStyle } from "./styled";

const App = () => {
  return (
    <BrowserRouter>
      <MyRoutes>     
          <Home />
      </MyRoutes>
      <GlobalStyle/>
    </BrowserRouter>
  );
};

export default App;
