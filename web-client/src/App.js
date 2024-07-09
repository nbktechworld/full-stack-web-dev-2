import React, { useState } from 'react';
import './App.css';
import './global.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="site-title">
        Full Stack Web Dev
      </header>
      <Outlet />
      <footer className="site-footer">
        Copyright &copy; Full Stack Web Dev
      </footer>
    </div>
  );
}

export default App;
