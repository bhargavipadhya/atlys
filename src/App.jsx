import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
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
