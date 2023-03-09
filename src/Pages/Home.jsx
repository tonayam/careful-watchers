import '../../src/App.css';
import { SmallHeader, BiggerHeader, DynamicHeader } from '../Components/Headers';
import Hero from '../Components/Hero';
import {SecondPage} from "../Components/SecondPage";
import Footer from '../Components/Footer';


function Home() {
  return (
    <section className="wrapper">
      <SmallHeader />
      <BiggerHeader />
      <Hero />
        <SecondPage />
        <Footer />
    </section>
    

  );
}


export default Home;