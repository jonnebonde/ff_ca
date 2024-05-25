import Header from "./Components/Layout/Header";

export default function App() {
  return (
    <>
    <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn">Button</button>
      <div className="p-4">
      <h1 className="text-primary">Dette er en primær fargetekst</h1>
      <p className="text-secondary">Dette er en sekundær fargetekst</p>
      <button className="btn btn-accent">Klikk Meg</button>
      <div className="border border-border p-2">Border Eksempel</div>
      <div className="flex items-center">
        <span className="text-stars">★</span>
        <span className="text-stars-empty">★</span>
      </div>
    </div>
    </>
  );
}
