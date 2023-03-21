import logo from './logo.svg';
import './App.css';
import Chat from './components/chat.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <div>
        React Chat<br/>
            <Link to="/chat1">Lumine</Link><br/>
            <Link to="/chat2">Albedo</Link><br/>
            <Link to="/chat3">Raiden</Link><br/>
            <Link to="/chat4">Ayaka</Link><br/>
          <Routes>
            <Route path="/chat1" element={<Chat name="Lumine"/>}>
            </Route>
            <Route path="/chat2" element={<Chat name="Albedo"/>}>
            </Route>
            <Route path="/chat3" element={<Chat name="Raiden"/>}>
            </Route>
            <Route path="/chat4" element={<Chat name="Ayaka"/>}>
            </Route>
            <Route path="/">
            </Route>
            </Routes>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;
