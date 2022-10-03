import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { Layout } from "./container";
import "./index.scss";

type Props = Pick<ComponentProps<typeof Layout>, "children">;

export const LayoutPresenter: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
};
