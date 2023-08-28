import "./App.css";
import Layout from "./App.style";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import TodoDesk from "./Container/pages/TodoDesk";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <SideBar />
        <TodoDesk />
      </Layout>
    </div>
  );
}

export default App;
