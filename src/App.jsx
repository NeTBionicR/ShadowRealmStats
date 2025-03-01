import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./component/Home/Home.jsx"
import {Guide} from "./component/Guide/Guide.jsx"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/guide" element={<Guide/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
