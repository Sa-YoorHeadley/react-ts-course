import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello World!"} />
      <Section title={"Different Title"}>This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold bold">{item}</span>}
      />
    </>
  );
}

export default App;
