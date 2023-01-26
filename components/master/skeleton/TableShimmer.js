export default function TableShimmer(props) {
  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4 mr-4">
          <>
            <div class="animate-shimmer animate-pulse mb-2">
              <div class="bg-gray-300 h-6 w-15"></div>
            </div>
            <div class="animate-shimmer animate-pulse">
              <div class="bg-gray-300 h-6 w-15"></div>
            </div>
          </>
        </div>
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4">
          <button class="bg-gray-300 animate-shimmer-button float-right mr-2"></button>

          <button class="bg-gray-300 animate-shimmer-button float-right mr-2"></button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1 bg-white square-lg p-6 mb-10">
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4 mr-4">
          <>
            <div class="animate-shimmer animate-pulse mb-2">
              <div class="bg-gray-300 h-6 w-15"></div>
            </div>
            <div class="animate-shimmer animate-pulse">
              <div class="bg-gray-300 h-6 w-15"></div>
            </div>
          </>
        </div>
        <div className="w-1/2 p-4 bg-gray-400 bg-white p-4">
          <button class="bg-gray-300 animate-shimmer-button float-right mr-2"></button>

          <button class="bg-gray-300 animate-shimmer-button float-right mr-2"></button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1 bg-white square-lg p-6 mb-10">
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
          <div class="bg-gray-300 animate-shimmer-div  mb-2"></div>
        </div>
      </div>
    </>
  );
  //   );
}
