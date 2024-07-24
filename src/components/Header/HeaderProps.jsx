import React from "react";

function HeaderProps({ title, items }) {
  return (
    <div>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button">
          {title}
        </a>
        <ul className="dropdown-menu">
          <li>
            {items.map((item, index) => (
              <a key={index} className="dropdown-item" href={item.link}>
                {item.name}
              </a>
            ))}
          </li>
        </ul>
      </li>
    </div>
  );
}

export default HeaderProps;
