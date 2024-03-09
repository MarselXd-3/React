function Title() {
  return <h1>Title Component</h1>;
}

function Header() {
  return (
    <header>
      <Title />
    </header>
  );
}

function Content() {
  return (
    <div>
      <Title />
      <p>Content Component</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <Title />
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;