import './App.css';
import V1 from './components/v1/V1';

const width = 1000;
const menuHeight = 0;
const height = 600 - menuHeight;
const margin = { top: 40, left: 100, right: 30, bottom: 50 }

function App() {
  return (
    <div>
      <V1 width={width} height={height} margin={margin} />
    </div>
  );
}

export default App;
