import Home from "Pages/Home"
import Detail from "Pages/Detail"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Router() {
  return <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
    {/* <Link to="/detail">상세 페이지 이동하기</Link> */}
    </BrowserRouter>
}
