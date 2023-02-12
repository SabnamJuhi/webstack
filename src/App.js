import './App.css';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Gifts from './Components/Gifts/gifts';
import DeliverySystem from './Components/DeliverySystem/DeliverySystem';
import Products from './Components/Products/Products';
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Gifts/>
      <DeliverySystem/>
      <Products/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
