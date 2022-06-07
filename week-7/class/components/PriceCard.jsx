export const PriceCard = ({ title, price, benefits, isEmph }) => {
  if (isEmph) {
    return (
      <div className="shadow-md rounded-md border-2 border-indigo-500 mt-8">
        <p
          className="text-center"
          style={{
            "margin-top": "-12px",
            "z-index": 999999,
          }}
        >
          <span className="text-white rounded-full px-2 py-1 font-semibold bg-indigo-500">
            MOST POPULAR
          </span>
        </p>
        <p className="font-semibold text-xl text-center  pt-4">{title}</p>
        <h1 className="text-xl text-gray-400 text-center my-4">
          $ <span className="font-black text-6xl text-gray-800">{price}</span> /
          month
        </h1>
        <hr />
        <div className="bg-gray-50 p-4">
          <ul className="list-disc p-4">
            {benefits.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="shadow-md rounded-md">
      <p className="font-semibold text-xl text-center  pt-4">{title}</p>
      <h1 className="text-xl text-gray-400 text-center my-4">
        $ <span className="font-black text-6xl text-gray-800">{price}</span> /
        month
      </h1>
      <hr />
      <div className="bg-gray-50 p-4">
        <ul className="list-disc p-4">
          {benefits.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
