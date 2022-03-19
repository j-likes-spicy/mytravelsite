import Header from "./Header";
import Section from "./Section";
import Data from "./Data";
import "./App.css";

function App() {
  const items = Data.map((item) => <Section key={item.id} item={item} />);
  return (
    <div>
      <Header />
      {items}
    </div>
  );
}

export default App;
