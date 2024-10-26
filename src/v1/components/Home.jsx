import Banner from "./Banner";
import ContactForm from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Socials from "./Socials";
const Main = () => {
  return (
    <div>
      <Banner />
      <Socials />
      <Resume />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Main;
