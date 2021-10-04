//HOC
import HomeLayoutHoc from "./HOC/Home.Hoc";

//component
import Temp from "./components/temp";
import HomeLayout from "./layout/Home.layout";
import Master from "./components/master";
function App() {

  return (
    <>
      <HomeLayoutHoc path= "/" exact component={ Temp } ></HomeLayoutHoc>
      <HomeLayoutHoc path= "/:type" exact component={ Master } ></HomeLayoutHoc>

    </>
  );
}

export default App;
