export default function Profile() {
  return (
    <div className="basis-1/4 shrink-0 shadow overflow-hidden bg-gray-50">
      <div className="px-4 py-5 sm:px-6 bg-white">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      </div>
      <div className="border-t border-gray-200 px-4">
        <dl>
          <div className="bg-white-50  py-5 flex-col">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Full Name
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Shyju Viswambaran
            </p>
          </div>
          <div className="bg-gray-50  py-5 flex-col">
            <h3>
              <span className="text-lg font-medium leading-6 text-gray-900">
                About Me
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-500 sm:col-span-2">
              A dedicated and solution-oriented Full Stack Developer with over
              15 years of experience in designing, developing, and managing
              complex applications and internal frameworks. Specializing in
              Python, Javascript, Dart and Flutter. I have a proven track record
              of leveraging full-stack expertise to build responsive and
              scalable web applications that meet client needs and exceed
              performance benchmarks. With a keen eye for balancing
              functionality with aesthetics, I bring a blend of technical skill
              and creative vision to foster innovative solutions.
            </p>
            <p className="mt-2 text-sm text-gray-500 sm:col-span-2">
              I thrive in environments where I can solve challenging problems
              and collaborate with cross-functional teams to drive projects from
              conception to deployment. I am passionate about continuous
              learning and staying ahead of the latest industry trends, which
              reflects in my work through the use of cutting-edge technologies
              and adherence to best practices in software development. My goal
              is to contribute positively to the growth of a forward-thinking
              company where my skills can make a significant impact.
            </p>
          </div>
          <div className="w-full max-w-xs mx-auto ">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">SKILLS</h3>
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-1">
                Python
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-1">AWS</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-1">
                Javascript/React/Nextjs/Tailwindcss
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-1">
                Dart and Flutter
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-teal-600 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}
