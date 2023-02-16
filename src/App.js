import "./App.css";
// 리액트 라우터 기능
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import TestPage2 from "./pages/TestPage2";

const App = () => {
  // 라우터
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<TestPage />} />
          <Route path="/2" exact={true} element={<TestPage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
