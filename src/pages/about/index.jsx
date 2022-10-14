import { useEffect } from "react";
import About from "../../components/about";
import useToTop from "../../hooks/useToTop";

const AboutPage = () => {
  const toTop = useToTop();

  useEffect(() => {
    toTop();
  }, []);

  return <About />;
};

export default AboutPage;
