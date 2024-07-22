import Home from "./component/Home";
import Footer from "./component/Footer";
import ContactForm from "./component/Contact";
import KeyBenefit from "./component/KeyBenefit";
import Header from "./component/Header";
import Features from "./component/Features";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <main>
        <Home />
        <KeyBenefit />
        <Features />
        <ContactForm />
      </main>
      <footer className="mt-4">
      <Footer />
      </footer>
    </div>
  );
}

export default App;
