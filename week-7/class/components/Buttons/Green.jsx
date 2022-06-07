import Link from "next/link";
import { CustomLink } from "../CustomLink";
export const GreenButtonFilled = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold">
        {text}
      </a>
    </Link>
  );
};

export const GreenNoFill = ({ text, href }) => {
  return (
    <CustomLink
      className="text-green-600 font-semibold hover:text-green-700"
      href="/about"
    >
      About Us
    </CustomLink>
  );
};
