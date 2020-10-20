import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%)
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    --rotate: -1.5deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
      --rotate: -1deg;
    }
    &:nth-child(2) {
      --rotate: 1deg;
    }
    &:nth-child(3) {
      --rotate: 0deg;
    }
    &:nth-child(4) {
    --rotate: 1.5deg;
  }
    &:hover {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      background-color: var(--red);
      color: var(--white);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/merch">Merchandise</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/fighters">Fighters</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
