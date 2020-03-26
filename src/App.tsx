import React from 'react';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import ReviewSlider from "./components/ReviewSlider";
import ConferenceList from "./components/ConferenceList";
import PopularPlace from "./components/PopularPlace";
import FlipBanner from "./components/FlipBanner";
function App() {
  return (
    <div>
    <Header />
    <Banner />
    <ReviewSlider />
    <ConferenceList />
    <PopularPlace />
    <FlipBanner />
    <Footer />
    </div>
  );
}

export default App;
