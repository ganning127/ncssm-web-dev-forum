// TODO: Swith to next/link
import Link from "next/link";
export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="" className="h-16 p-4" />
            <div className="flex space-x-4">
              <Link href="/">
                <a
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/pricing">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="mr-2">
            <img
              src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6222481c0ad8761618b18e7e_profile-picture.jpg"
              alt=""
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
