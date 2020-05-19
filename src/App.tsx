import React from 'react';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Conferences from "./components/conferenses";
function App() {
  return (
    <div>
    <Header />
    <Conferences />
    <Footer />
    </div>
  );
}

export default App;