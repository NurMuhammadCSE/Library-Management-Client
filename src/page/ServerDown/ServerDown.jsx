const ServerDown = () => {
  return (
    <div>
      <div className="my-14">
        <html className="h-full">
          <body className="flex h-full">
            <div className="max-w-[50rem] flex justify-center items-center flex-col mx-auto w-full h-full">
              <img src="download.png" className="w-24" alt="" />
              <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                  Server is Down
                </h1>
                <h1 className="block text-2xl font-bold text-white"></h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Sorry We are Down for Schedule maintenance Right Now
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sorry, we couldn&apos;t find your page.
                </p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                  {/* <Link
                  to={"/"}
                  className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../examples.html"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Home
                </Link> */}
                </div>
              </div>
            </div>
          </body>
        </html>
      </div>
    </div>
  );
};

export default ServerDown;
