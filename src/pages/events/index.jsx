import { useEffect } from "react";
import Events from "../../components/events";
import useToTop from "../../hooks/useToTop";

const EventsPage = () => {
  const toTop = useToTop();

  useEffect(() => {
    toTop();
  }, []);

  return <Events />;
};
export default EventsPage;
