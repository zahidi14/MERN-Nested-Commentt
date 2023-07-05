import "./App.scss";

import { Main } from "./page";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
