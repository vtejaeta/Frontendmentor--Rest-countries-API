import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>
        by{" "}
        <a
          href="https://github.com/vtejaeta/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          vtejaeta
        </a>
      </p>
    </div>
  );
}

export default Footer;
