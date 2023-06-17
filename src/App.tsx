import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "./modules/home/components"

function App() {
    return (
        <Routes>
            <Route id='home' path={'/customers/*'} Component={Home}/>
            <Route id='rest' path={'*'} element={<Navigate to={'/customers'}/>}/>
        </Routes>
    );
}

export default App
