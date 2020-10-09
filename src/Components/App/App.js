import React from 'react';
import Header from '../Header/header';
import Description from '../Description/description';
import SearchBar from '../SearchBar/searchBar';
import Services from '../Services/services';
import HeaderFooter from '../HeaderFooter/headerFooter';
import Footer from '../Footer/footer';
import Copyright from '../Copyright/copyright';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Description />
        <SearchBar />
        <Services />
        <HeaderFooter />
        <Footer />
      </div>
      <Copyright />
    </>
  );
}

export default App;
