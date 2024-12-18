import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS  } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContant = "please click a button";
  function handleSelect(selectedButton){
    // selectedButton => 'components','jsx','props','state'
    tabContant = selectedButton;
    console.log(tabContant);
}

console.log("app component executing");
  return (
    <div>
      <Header />
      
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              {/* <TabButton label="Components"></TabButton> */}
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>

          </menu>
          {tabContant}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;