import * as React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

const items: Array<Person> = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Octo", lastName: "Cat" }
];

const onMatch = (text: string) => {
  const term = text.toLowerCase();
  return items.filter(
    _ =>
      _.firstName.toLowerCase().startsWith(term) ||
      _.lastName.toLowerCase().startsWith(term)
  );
};

const Root = ({ children }: { children: JSX.Element }) => (
  <span className="bg-green-lighter">{children}</span>
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

const formatPerson = (person: Person) =>
  `${person.firstName} ${person.lastName}`;

const Item = ({
  item,
  current,
  onClick
}: {
  item: Person;
  current: boolean;
  onClick: () => void;
}) => {
  let classNames = "AutocompleteListItem";
  classNames += current ? " current" : "";
  return (
    <li className={classNames} onClick={onClick}>
      {formatPerson(item)}
    </li>
  );
};

const config = {
  prefix: "@",
  type: "PERSON",
  mutability: "IMMUTABLE",
  onMatch: onMatch,
  component: Root,
  listComponent: List,
  itemComponent: Item,
  format: (item: Person) => `@${formatPerson(item)}`
};

export default config;
