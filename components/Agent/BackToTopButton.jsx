import ScrollToTop from "react-scroll-to-top";
import {ImArrowUp} from "react-icons/im"

const BackToTopButton = () => {
  return (
      <ScrollToTop smooth top={250} component={<ImArrowUp />} />
  );
};

export default BackToTopButton;
