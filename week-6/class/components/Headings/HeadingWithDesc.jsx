export const HeadingWithDesc = ({ desc, children }) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-5xl font-black">{children}</h1>
      <p className="text-lg">{desc}</p>
    </div>
  );
};
