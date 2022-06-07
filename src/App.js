import './App.css';
import V1 from './components/v1/V1';

const width = 960;
const height = 500;
const margin = { top: 20, left: 200, right: 20, bottom: 20 }

function App() {
  return (
    <div>
      <V1 width={width} height={height} margin={margin} />
    </div>
  );
}

export default App;
