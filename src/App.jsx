import "./App.css";
import Header from "./components/Header";
import Payments from "./components/Payments";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-72">
        <Header />
        <Payments />
      </div>
    </div>
  );
}

export default App;
