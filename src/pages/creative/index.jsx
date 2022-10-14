import { useEffect } from "react";
import Creative from "../../components/creative-networking";
import useToTop from "../../hooks/useToTop";

const CreativePage = () => {
  const toTop = useToTop();

  useEffect(() => {
    toTop();
  },[]);

  return <Creative />;
};
export default CreativePage;
