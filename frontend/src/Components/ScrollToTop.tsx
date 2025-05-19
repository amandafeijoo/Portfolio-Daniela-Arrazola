// src/components/ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // 1) scroll de window (por si alguna página sí usa window)
    window.scrollTo(0, 0);
    // 2) scroll del MainWrapper
    const main = document.getElementById("main-scroll-container");
    if (main) main.scrollTo({ top: 0, left: 0 });
  }, [pathname]);
  return null;
}
