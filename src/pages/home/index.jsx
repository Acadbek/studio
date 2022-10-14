import { useEffect } from "react";
import Home from "../../components/home";
import useToTop from "../../hooks/useToTop";

export const HomePage = () => {
  const toTop = useToTop();
  useEffect(() => {
    toTop();
  }, []);

  return <Home />;
};
export default HomePage;
