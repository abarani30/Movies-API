import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src="/logo.svg" alt="" />
          <div className="input">
            <i>
              <img src="/search.svg" alt="" />
            </i>
            <input type="text" placeholder="Find Movie..." />
            <div
              className="results"
              style={{
                width: "300px",
                maxHeight: "500px",
                backgroundColor: "#384763",
                position: "absolute",
                zIndex: "4",
                top: "38px",
                right: "0",
                overflow: "scroll",
                borderRadius: "10px",
                overflowX: "hidden",
              }}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
