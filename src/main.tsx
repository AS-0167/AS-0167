import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import MouseTrail from './MouseTrail.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MouseTrail /> {/* ← add it here */}
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);
