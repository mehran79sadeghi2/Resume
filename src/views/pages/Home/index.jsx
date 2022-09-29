import Page from "../../shared-components/Page";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";

function Home() {
  return (
    <Page>
      <Hero />
      <Experiences />
      <Educations />

    </Page>
  );
}

export default Home;
