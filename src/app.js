import "./app.css";
import BurguerButton from "./componentes/burguer";
import Navbar from "./componentes/Navbar";

function App() {
  // respuesta a evento
  function handleImageClick() {
    console.log("Click en la imagen");
  }

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <p>Burguer</p>
          <img
            onClick={handleImageClick}
            src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
            alt="burguer Logo"
          />
        

          <Item
            price={200}
            title="hamburguesa simple"
            description="Lorem Ipsum"
            imgurl="https://http2.mlstatic.com/D_Q_NP_705846-MLA46245294663_062021-AB.webp"
          />

          <Item
            price={500}
            title="hamburguesa doble "
            description="Lorem Ipsum"
            imgurl="https://http2.mlstatic.com/D_Q_NP_712088-MLA44676313815_012021-AB.webp"
          />
          <Item
            price={900}
            title="hamburguesa triple"
            description="Lorem Ipsum"
            imgurl="/img/ecociencia.webp"
          />
        </header>
      </div>
    </>
  );
}

export default App;