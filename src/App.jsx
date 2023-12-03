import { CORE_CONCEPTS } from './data';
import Header from './Components/Header/Header';
import CoreConcepts from './Components/CoreConcept/CoreConcept';
import TabButton from './Components/TabButton/TabButton';

// root component. Odavne pocinje i pravi se component tree.
// Pravi razliku izmedju built in components i custom components
function App() {
  function handleSelect() {
    console.log('Hello world! - selected');
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcepts {...CORE_CONCEPTS[1]}/>

            <CoreConcepts  {...CORE_CONCEPTS[2]}/>

            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
        
      </main>
    </div>
  );
}

export default App;