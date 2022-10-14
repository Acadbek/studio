import { useEffect } from "react";
import Spaces from "../../components/spaces";
import useToTop from "../../hooks/useToTop";

const SpacesPage = () => {
  const toTop = useToTop();

  useEffect(() => {
    toTop();
  }, []);

  return <Spaces />;
};
export default SpacesPage;
