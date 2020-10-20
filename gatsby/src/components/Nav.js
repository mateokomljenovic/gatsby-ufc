import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/merch">See Merch</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/fighters">Fighters</Link>
        </li>
        <li>
          <Link to="/order">Order!</Link>
        </li>
      </ul>
    </nav>
  );
}
