import logo from './logo.svg';
import './App.css';
import Header from './components/global/Header';
import Form from './form/Form'
import OptimizedForm from './form/OptimizedForm';
import { ABC, XYZ } from './form/Example';
// import List from './components/global/List';
import List from './components/global/ProductList/List'
import Fetch from './APIRequest/FetchAPI'

function App() {
  return (
    <div className="App">
      <Fetch />



    </div>
  );
}

export default App;
