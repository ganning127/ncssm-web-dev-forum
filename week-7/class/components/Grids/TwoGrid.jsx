export const TwoGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center">
      {children}
    </div>
  );
};
