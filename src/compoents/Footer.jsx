import React from "react";

export default function Footer() {
  return (
    <div className="row foote">
      <footer className="text-center text-lg-start">
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright:
          <a className="link-creator" href="https://mdbootstrap.com/">
            Mukhtorov
          </a>
        </div>
      </footer>
    </div>
  );
}
