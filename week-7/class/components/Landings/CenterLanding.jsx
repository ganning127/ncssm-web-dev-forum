import { GreenNoFill, GreenButtonFilled } from "../Buttons/Green";

export const CenterLanding = () => {
  return (
    <div className="max-w-2xl text-center mx-auto">
      <h1 className="font-black text-slate-800 text-6xl">
        Why read spam when{" "}
        <span className="text-green-600">you don&apos;t have to?</span>
      </h1>
      <p className="my-4 text-gray-500">
        Twtter &copy; is spearheading scams, spams, and pans on twitter. Join
        us, as we combat the spread of misleading information on Twitter, one
        tweet at at time.
      </p>

      <div className="flex mx-auto justify-center items-center space-x-4">
        <GreenButtonFilled text="Get Started" href="/pricing" />
        <GreenNoFill text="Get Started" href="/pricing" />
      </div>
    </div>
  );
};
