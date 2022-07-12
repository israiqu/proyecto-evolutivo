import logo from './logo.svg';
import './App.css';
import ContactsListComponent from './components/container/contacts.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ContactsListComponent></ContactsListComponent>
        
      </header>
    </div>
  );
}

export default App;
