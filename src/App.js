import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNavBar from "./components/navbar/navBar.js";
import MonitoringPage from './components/monitoringPage/monitoringPage';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MonitoringPage />
    </div>
  );
}

export default App;
