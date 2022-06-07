import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { CenterLanding } from "../components/Landings/CenterLanding";
import { SmSep } from "../components/Separators/SmSep";
import { MedSep } from "../components/Separators/MedSep";
import { ThreeGrid } from "../components/Grids/ThreeGrid";
import { TwoGrid } from "../components/Grids/TwoGrid";
import { Sponsor } from "../components/Sponsor";
import { PriceCard } from "../components/PriceCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twttr - No Spam Tweets</title>
      </Head>

      <NavBar />

      <MedSep />

      <div className="container mx-auto px-4">
        <CenterLanding />
        <SmSep />
        <h3 className="text-gray-400 text-lg text-center mt-16 font-semibold">
          TRUSTED BY
        </h3>
        <ThreeGrid>
          <Sponsor img="/google.jpeg" href="https://www.google.com/" />
          <Sponsor img="/azure.png" href="https://azure.microsoft.com/en-us/" />
          <Sponsor img="/aws.png" href="https://aws.amazon.com/" />
        </ThreeGrid>
        <MedSep line={true} />

        <TwoGrid>
          <div>
            <h1 className="text-4xl font-black text-gray-800">
              We are <span className="text-green-600">the future</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div>
            <img
              src="/happy.png"
              className="max-h-72 mx-auto rounded-md shadow-lg"
            />
          </div>
        </TwoGrid>
        <MedSep line={true} />

        <h1 className="text-4xl font-black text-gray-800 text-center">
          The right price for you, whoever you are
        </h1>

        <ThreeGrid>
          <PriceCard
            title="Beginner"
            price="12"
            benefits={[
              "lorem iupsum but i cannot type the ipsum lol",
              "laceholder text is the label for possible content in a text box.",
            ]}
            isEmph={false}
          />
          <PriceCard
            title="Growth"
            price="145"
            benefits={[
              "lorem iupsum but i cannot type the ipsum lol",
              "laceholder text is the label for possible content in a text box.",
              "ed in publishing and graphic design. This filler text is a short paragraph that contains all the letters",
            ]}
            isEmph={true}
          />
          <PriceCard
            title="Hobby"
            price="67"
            benefits={[
              "lorem iupsum but i cannot type the ipsum lol",
              "laceholder text is the label for possible content in a text box.",
            ]}
            isEmph={false}
          />
        </ThreeGrid>

        <MedSep line={true} />
      </div>
    </>
  );
}
