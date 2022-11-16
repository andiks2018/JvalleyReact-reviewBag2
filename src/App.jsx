import "./App.css";
import Card from "./components/Card";
import MainLayout from "./layouts/MainLayout";
import {useState} from "react" 
import FetchApi from "./components/FetchApi";

function App() {

  //state 
  const [text, setText]=useState("ubah disini")

  //function yang menangkap value dari element input
  const handleChangeText = (e)=>{
    //console.info(e.target.value)
    setText(e.target.value)
  }

  return (
    //<div className='App'>
    <MainLayout>
      <FetchApi />
      
      
      
      <br /><br />
      <h1>{text}</h1>
      <div>
        <input type="text" onChange={handleChangeText} />
      </div><br /><br />

      <Card
        img="https://picsum.photos/seed/andi/200/200"
        title="Ini hati siapa"
        content="Sudah lama tidak terisi? - Jone - 
      "
      />
      <Card
        img="https://picsum.photos/seed/ismail/200/200"
        title="Ini hati kamu"
        content="belum lama tidak terisi? - Jone - 
      "
      />
      <Card
        img="https://picsum.photos/seed/abdullah/200/200"
        title="Ini hati dia"
        content="akan lama tidak terisi? - Jone - 
      "
      />
      <Card img={"https://picsum.photos/seed/abduh/200/200"} title={"Atas Neraka"} content={"Bawah Surga"} />
    </MainLayout>
    //</div>
  );
}
export default App;
