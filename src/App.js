import logo from './logo.svg';
import './App.css';
import Header from './components/global/Header';
import Form from './form/Form'
import OptimizedForm from './form/OptimizedForm';
import { ABC, XYZ } from './form/Example';

function App() {
  return (
    <div className="App">
      <Header />
      <OptimizedForm />
      <ABC />

    </div>
  );
}

export default App;
