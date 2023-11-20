import Home from "Pages/Home"
import Detail from "Pages/Detail"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

export default function Router() {
  return <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </BrowserRouter>
}
