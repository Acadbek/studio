import { useEffect } from "react";
import Help from "../../components/help";
import useToTop from "../../hooks/useToTop";

const HelpPage = () => {
  const toTop = useToTop();

  useEffect(() => {
    toTop();
  }, []);

  return <Help />;
};
export default HelpPage;
