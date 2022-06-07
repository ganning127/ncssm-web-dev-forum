export const ThreeGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center items-center gap-8">
      {children}
    </div>
  );
};
