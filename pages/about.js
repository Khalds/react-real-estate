import Link from "next/link";
import AboutUs from "../components/AboutUs/AboutUs";

const about = () => {
  return (
    <h2>
      <Link href="/">Home</Link>
      <AboutUs />
    </h2>
  );
};

export default about;
