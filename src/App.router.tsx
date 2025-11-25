import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './features/Home/pages/HomePage';
import { NavBar } from './ui/layout/NavBar';
import { Footer } from './ui/layout/Footer';

export default function App() {
  return (
    <div className="main-container">
      <div className="content-wrap">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div >
  );
}

