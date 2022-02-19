import './App.css';
import MainComponent from './components/main';


function App() {
  require('dotenv').config()

  const apiKey=process.env.REACT_APP_API_KEY
  return (
    <MainComponent apiKey={apiKey}/>
  );
}

export default App;
