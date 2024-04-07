import Image from "next/image";

export default function Header() {
  return (
    <header className="flex mt-8 bg-white">
      <div className="flex-none w-16 bg-green-500 p-4 mr-2 rounded-r-lg"></div>
      <div className="flex-grow mx-auto overflow-hidden bg-white shadow-lg rounded-l-lg">
        <div className=" flex items-center min-h-36">
          <div
            className="h-36 w-48 relative bg-amber-800 rounded-lg shadow-lg overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          >
            <div
              className="absolute inset-0"
              // style={{ transform: "scale(1.5) translateY(-5%)" }}
            >
              <Image
                src="/portfolio.jpeg"
                alt="profile"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="ml-4 flex-grow self-end pb-2">
            <div className="text-xl font-semibold text-gray-800">Shyju</div>
            <div className="text-xl font-semibold text-blue-500">
              Viswambaran
            </div>
            <div className="text-sm text-gray-700">Sr Fullstack Developer</div>
          </div>
          <div className="ml-4 pr-8 pr-24">
            <div className="text-sm text-gray-700 mt-2">www.example.com</div>
            <div className="text-sm text-gray-700">
              401 Honeysuckle Lane, Cecil, AL, 36013
            </div>
            <div className="text-sm text-gray-700">334-467-7412</div>
            <div className="text-sm text-gray-700">shyjuezy@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}