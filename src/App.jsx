import React  from 'react'
import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import Layout from "./components/Layout";
import Feed from "./pages/Feed";

function App() {

  return (
    <Layout>
        <Routes>
            <Route path="/" element={<WelcomeScreen/>} />
            <Route path="/feed" element={<Feed/>} />
        </Routes>
    </Layout>
  )
}

export default App
