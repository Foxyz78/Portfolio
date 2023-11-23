import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

import "./scss/main.scss";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
