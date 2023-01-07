import { useStore } from "@nanostores/react";
import { locale as lang } from "@/stores/locale";

const ChangeLocaleButton: React.FC = () => {
  const locale = useStore(lang);
  return (
    <button
      onClick={() => lang.set(lang.get() === "español" ? "english" : "español")}
      className="absolute right-6 font-bold text-cyan"
    >
      {locale}
    </button>
  );
};

export default ChangeLocaleButton;
