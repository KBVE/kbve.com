const Spinner = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center my-32">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            <p className="gradient-text">Loading...</p>
          </span>
        </div>
        <p className="gradient-text">Loading...</p>

        <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse dark:bg-gray-900">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-3 rounded dark:bg-gray-700"></div>
              <div className="w-5/6 h-3 rounded dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="p-4 space-y-4 sm:px-8">
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-3/4 h-4 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spinner;
