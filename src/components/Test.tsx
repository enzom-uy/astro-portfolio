import { useStore } from "@nanostores/react";
import { lang } from "../state/lang";

const Test: React.FC = () => {
  const language = useStore(lang);
  return <h1>{language}</h1>;
};

export default Test;
