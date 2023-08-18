import { BestChoice, Experts, Footer, HeroSection, Navbar, Support } from './components';

function App() {
  return (
    <section className="font-pop bg-dark  h-screen rounded-t-md overflow-x-hidden max-w-[1440px] m-auto">
      <Navbar />
      <HeroSection />
      <BestChoice />
      <Experts />
      <Support />
      <Footer/>
    </section>
  );
}

export default App;
