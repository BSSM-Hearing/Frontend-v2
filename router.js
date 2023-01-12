import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import Speech from "./components/speech";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Introduce from "./pages/introduce";
import Practice from "./pages/practice/Index";
import CallMode from "./pages/callMode/Index";
import Main from "./pages/main";
import Help from "./pages/help";
import Analytic from "./pages/analytic";
import NotFound from "./pages/404";
import Real from "./pages/help/real";
import NearSound from "./pages/nearSound/Index";
import FindSound from "./pages/findSound/Index";
import Parent from "./pages/help/parent";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/callMode" element={<CallMode />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/nearsound" element={<NearSound />} />
        <Route path="/findsound" element={<FindSound />} />
        <Route path="/analytic" element={<Analytic />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/real" element={<Real />} />
        <Route path="/help/parent" element={<Parent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
