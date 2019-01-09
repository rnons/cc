import * as React from "react";

const items = [
  "react",
  "draft-js",
  "component",
  "redux",
  "react-redux",
  "hook",
  "function",
  "elm",
  "purescript",
  "haskell"
];

const onMatch = (text: string) => {
  const term = text.toLowerCase();
  return items.filter(_ => _.toLowerCase().startsWith(text));
};

const Root = ({ children }: { children: JSX.Element }) => (
  <span className="bg-blue-lighter">{children}</span>
);

const List = ({
  children,
  ...positions
}: {
  children: JSX.Element;
  bottom: number;
  left: number;
}) => {
  const styles = {
    top: positions.bottom,
    left: positions.left
  };
  return (
    <ul className="AutocompleteList" style={styles}>
      {children}
    </ul>
  );
};

const Item = ({
  item,
  current,
  onClick
}: {
  item: string;
  current: boolean;
  onClick: () => void;
}) => {
  let classNames = "AutocompleteListItem";
  classNames += current ? " current" : "";
  return (
    <li className={classNames} onClick={onClick}>
      {item}
    </li>
  );
};
const config = {
  prefix: "#",
  type: "HASHTAG",
  mutability: "IMMUTABLE",
  onMatch: onMatch,
  component: Root,
  listComponent: List,
  itemComponent: Item,
  format: (item: string) => `#${item}`
};

export default config;
