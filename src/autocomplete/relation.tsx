import * as React from "react";

const items = [
  "functional programming",
  "imperative programming",
  "show me your code",
  "In Draft.js, everything is customizable – we provide the building blocks so that you have full control over the user interface. Here's a simple example of a rich text editor built in Draft.js"
];

const onMatch = (text: string) => {
  const term = text.toLowerCase();
  return items.filter(_ => _.toLowerCase().startsWith(text));
};

const Root = ({ children }: { children: JSX.Element }) => (
  <span className="bg-indigo-lighter">{children}</span>
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
  prefix: "<>",
  type: "RELATION",
  mutability: "IMMUTABLE",
  onMatch: onMatch,
  component: Root,
  listComponent: List,
  itemComponent: Item,
  format: (item: string) => `<>${item}`
};

export default config;
