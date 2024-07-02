import './App.css';
import Card from './Card';
import Background from './Background';

function App() {
  return (
    <div className='App'>
      <Background />
      <div className='Main'>
        <div className='Side grid-item'></div>
        <div className='Content grid-item'></div>
      </div>
    </div>
  );
}

export default App;
