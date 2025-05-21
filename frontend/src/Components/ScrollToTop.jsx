// src/Components/ScrollToTop.jsx
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // localiza tu contenedor scrollable
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    // fuerza el scroll del contenedor al top
    scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // y para asegurarnos de cualquier reflow:
    requestAnimationFrame(() => scroller.scrollTo(0, 0));
    setTimeout(() => scroller.scrollTo(0, 0), 100);
  }, [pathname]);

  return null;
}


