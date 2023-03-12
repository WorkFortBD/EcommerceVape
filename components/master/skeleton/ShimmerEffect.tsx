export default function ShimmerEffect() {
  return (
    <div className="flex flex-wrap justify-center -mx-2 w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="group mb-6 border border-gray-100 shadow-sm rounded-lg mx-2 transition hover:shadow-md group-hover:opacity-75 min-w-[135px] md:min-w-[230px]"
        >
          <div className="animate-pulse">
            <div className="overflow-hidden">
              <div className="bg-gray-200 h-60 w-full"></div>
            </div>
            <div className="mt-1 p-4">
              <div className="bg-gray-200 h-4 rounded w-4/5"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mt-2"></div>
              <div className="bg-gray-200 h-4 rounded w-5/6 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
