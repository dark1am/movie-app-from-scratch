import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react/cjs/react.production.min"

const Home = lazy(()=>import("../pages/Home/Home"))
const Profile = lazy(()=>import("../pages/Profile/Profile"))
const Search = lazy(()=>import("../pages/Search/Search"))
const NotFound = lazy(()=>import("../pages/NotFound/NotFound"))
const Login = lazy(()=>import('../pages/Login/Login'))

function Routing() {
  return (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default Routing