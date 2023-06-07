import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextAPI";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header></Header>
          <Routes>
            <Route path="/" exact element={<Feed></Feed>}></Route>
            <Route path="/searchResult/:searchQuery" element={<SearchResult></SearchResult>}></Route>
            <Route path="/video/:id" element={<VideoDetails></VideoDetails>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
