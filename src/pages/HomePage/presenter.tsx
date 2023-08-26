import logo from "../../assets/images/logo.svg";

type Props = {
  count: number;
  onCound: () => void;
};

export const HomePagePresenter = ({ count, onCound }: Props) => {
  return (
    <div>
      <img src={logo} className="app-logo" alt="logo" />
      <h2>React, Vite, Vitest, Remote Development Example !</h2>
      <div>
        <button type="button" onClick={onCound}>
          count is: {count}
        </button>
      </div>
    </div>
  );
};
