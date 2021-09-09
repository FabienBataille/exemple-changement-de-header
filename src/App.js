import React from "react";
import "./App.css";
const { useState, useEffect } = React;

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 60;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToHideFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (winScroll > heightToHideFrom) {
      isVisible2 && setIsVisible2(true);
    } else {
      setIsVisible2(false);
    }

  };

  return (
    <div id="container">
      <div id="height">
        <b>height: {height} </b>
      </div>
      {isVisible && (
        <div id="header-mastok">Content hidden when scrolled beyond 200px</div>
      )}

      {isVisible2 && (
        <div id="header-small">Content header small</div>
      )}
    </div>
  );
}

export default App;
