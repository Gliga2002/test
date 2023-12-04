import CoreConcepts from './Components/CoreConcepts';
import Examples from './Components/Examples';
import Header from './Components/Header/Header';

// root component. Odavne pocinje i pravi se component tree.
// Pravi razliku izmedju built in components i custom components
function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;