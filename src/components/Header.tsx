import Image from "next/image";

export default function Header() {
  return (
    <header className="flex mt-0 bg-white sm:px-4 lg:mt-8 md:px-0">
      <div className="hidden md:block flex-none w-16 bg-green-500 p-4 mr-2 rounded-r-lg"></div>
      <div className="flex-grow mx-auto overflow-hidden bg-white shadow-lg rounded-lg border-b border-grey-500">
        <div className="flex items-center min-h-36 pr-8 lg:pr-24 ">
          <div
            className="hidden sm:block h-36 w-48 relative bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/portfolio.png"
                alt="profile"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="ml-4 flex-grow self-end pb-2">
            <div className="text-2xl font-semibold text-gray-800">Shyju</div>
            <div className="font-crimson text-2xl font-semiold text-green-700">
              Viswambaran
            </div>
            <div className="text-sm text-gray-700">Sr Fullstack Developer</div>
          </div>
          <div className="ml-4 pr-8 pr-32">
            <div className="text-sm text-gray-700 mt-2">
              www.shyjuviswambaran.link
            </div>
            <div className="text-sm text-gray-700">
              401 Honeysuckle Lane, Cecil, AL, 36013
            </div>
            <div className="text-sm text-gray-700">334-467-7412</div>
            <div className="text-sm text-gray-700">shyjuezy@gmail.com</div>
            <div className="flex items-center flex-row gap-2 justify-end">
              <div className="text-sm text-gray-700">
                <a
                  href="https://www.linkedin.com/in/shyju-viswambaran-b601897/"
                  target="_blank"
                >
                  <Image
                    src="/LI-In-Bug.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:opacity-80"
                  />
                </a>
              </div>
              <div className="text-sm text-gray-700">
                <a href="https://github.com/shyjuezy" target="_blank">
                  <Image
                    src="/github-mark.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-none w-16 bg-green-500 ml-2 rounded-l-lg"></div>
    </header>
  );
}
