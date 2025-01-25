import Banner from "./Banner";
import ContactForm from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";
import Socials from "./Socials";
const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navigation />
      <Banner />

      <Resume />
      <Projects />
      <Socials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Main;
