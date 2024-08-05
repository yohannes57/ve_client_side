import React from "react";
import { Link } from "react-router-dom";
import EachDestination from "../EachDestination";

function HeaderProps({ title, items, link, name }) {
  return (
    <>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to={link} role="button">
          {title}
        </Link>
        <ul className="dropdown-menu">
          <li>
            {items.map((item, index) => (
              <Link
                key={index}
                className="dropdown-item"
                // to={item.name.replace(/\s+/g, "").toLowerCase()}
                to={`/${link}/${item.link}`}
              >
                {item.name}
                {/* <EachDestination id={item._id} /> */}
              </Link>
            ))}
          </li>
        </ul>
      </li>
    </>
  );
}

export default HeaderProps;
