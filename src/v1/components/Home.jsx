import BackToTop from "./BackToTop";
import Banner from "./Banner";
import ContactForm from "./Contact";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Resume from "./Resume";
import Socials from "./Socials";

const Main = () => {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <BackToTop />
      <div className="relative min-h-screen">
        <Navigation />
        <Banner />
        <Resume />
        <Projects />
        <Socials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Main;
