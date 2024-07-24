import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Index from "./pages/Index";
import Policy from "./pages/policy";
import Tnc from "./pages/tnc";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Index />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/tnc" element={<Tnc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
