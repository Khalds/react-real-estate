import { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { ImArrowDown } from "react-icons/im";
import IconModal from "../../Agent/IconModal/IconModal";
import styles from "./ApartmentCardsHomePage.module.css";

const ModalCompanent = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <>
          <div className={styles.icon_modal_wrapper}>
            <IconModal />
          </div>
          <div className={styles.arrowDown}>
            <ImArrowDown className={styles.arrow} />
          </div>
        </>
      )}
      <span onClick={() => setOpen(!open)}>
        <BsFillShareFill className={styles.menu_icons} />
      </span>
    </>
  );
};

export default ModalCompanent;
