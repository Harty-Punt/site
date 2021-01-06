import './App.scss';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { CTA } from './components/CTA/CTA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="applications">
        <CTA text="Aplique pra nossa guild"/>
      </section>
    </div>
  );
}

export default App;
