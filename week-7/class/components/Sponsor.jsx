import { CustomLink } from "./CustomLink";

export const Sponsor = ({ img, href }) => {
  return (
    <CustomLink href={href}>
      <img src={img} alt={href} className="max-h-44 mx-auto" />
    </CustomLink>
  );
};
