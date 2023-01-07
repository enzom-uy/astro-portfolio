import { useState } from "react";
import { useStore } from "@nanostores/react";
import { locale as lang } from "@/stores/locale";
import TextEng from "./TextEng";

const WhoamiResponse: React.FC = () => {
  const locale = useStore(lang);

  return (
    <>
      <div className="text-lg flex flex-col">
        {locale === "english" ? (
          <TextEng />
        ) : (
          <>
            <p>
              Enzo es un
              <span className="highlight"> Desarrollador Full Stack</span>{" "}
              viviendo en Uruguay, apasionado del código y cosas nerds. Empezó
              su aventura en 2021 cuando decidió estudiar
              <span className="highlight"> Desarrollo Web</span>. Actualmente,
              continúa practicando y aprendiendo día a día, creando cosas
              nuevas.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default WhoamiResponse;
