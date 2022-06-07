// TODO: Swith to next/link
import Link from "next/link";
export const NavBar = () => {
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <div className="flex items-center">
                <img src="/logo.png" alt="" className="h-16 p-4" />
                <h1 className="font-black text-slate-800 text-xl tracking-wide">
                  twttr
                </h1>
              </div>
            </a>
          </Link>
          <div className="mr-2">
            <div className="flex space-x-4">
              <Link href="/about">
                <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  about
                </a>
              </Link>
              <Link href="/pricing">
                <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  pricing
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
