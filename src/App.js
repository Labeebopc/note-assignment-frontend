import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AddNote from './components/add-note/add-note';
import DisplayNotes from './components/display-notes/display-notes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayNotes />} />
          <Route path="/addnote" element={<AddNote />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
