import './App.css';
import Header from './components/header';
import CSM from './components/CSM';
import Data from './Data.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="csmbody">
      <CSM data={Data} /></div>
    </div>
  );
}

export default App;
