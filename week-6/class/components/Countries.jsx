import useSWR from "swr";
import { HeadingWithDesc } from "./Headings/HeadingWithDesc";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Countries = () => {
  const { data, error } = useSWR("/api/countries", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  let use = data.data;
  return (
    <div className="mt-5">
      <HeadingWithDesc desc="Fetched from an API endpoint">
        The World&apos;s Countries
      </HeadingWithDesc>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {use.map((country, index) => {
          return (
            <div key={index}>
              <p className="font-bold text-blue-400">{country.name.common}</p>
              <ul className="list-disc ml-8">
                <li>UN Member? {country.unMember.toString()}</li>
                <li>LandLocked? {country.landlocked.toString()}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
