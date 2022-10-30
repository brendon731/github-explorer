import React from "react"
import {Route, Routes} from "react-router-dom"

import Dashboard from "../pages/dashboard"
import Repository from "../pages/Repository"

const MyRoutes: React.FC = () => (

    <Routes>
        <Route path="*" element={<Dashboard/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/repository/*" element={<Repository/>}/>
    </Routes>
)
    

export default MyRoutes
