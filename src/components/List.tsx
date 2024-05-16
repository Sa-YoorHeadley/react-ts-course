import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};

export default function List<T>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
}
