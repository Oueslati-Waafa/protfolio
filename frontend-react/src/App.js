
import './App.css';
import {About,Footer,Header,Skills,Work, Certifications} from './container'
import {Navbar} from './components'
import './App.scss'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Certifications/>
      <Footer/>
    </div>
  );
}

export default App;
