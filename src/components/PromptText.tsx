const Cursor: React.FC = () => {
  return (
    <div className="border-r-[0.63em] absolute h-[1.5rem] top-[0.12rem] left-[4.4rem] border-white animate-blink"></div>
  );
};

const PromptText: React.FC = () => {
  return (
    <div className="relative">
      <p className="text-lg font-semibold relative animate-type overflow-x-hidden whitespace-nowrap">
        whoami
      </p>
      <Cursor />
    </div>
  );
};

export default PromptText;
