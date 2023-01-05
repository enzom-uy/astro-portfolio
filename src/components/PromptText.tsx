const Cursor: React.FC = () => {
  return (
    <div className="border-r-[0.70em] absolute h-full top-0 left-[4.8rem] border-white transition-all "></div>
  );
};

const PromptText: React.FC = () => {
  return (
    <div className="relative">
      <p className="text-lg font-semibold relative">whoami</p>
      <Cursor />
    </div>
  );
};

export default PromptText;
