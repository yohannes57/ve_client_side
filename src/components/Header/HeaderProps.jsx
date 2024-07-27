import React from "react";
import { Link } from "react-router-dom";

function HeaderProps({ title, items, link }) {
  return (
    <div>
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
                to={item.name.replace(/\s+/g, "").toLowerCase()}
              >
                {item.name}
              </Link>
            ))}
          </li>
        </ul>
      </li>
    </div>
  );
}

export default HeaderProps;
