const Loading = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-white border-b-white rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <p className="mt-6 text-lg font-medium text-white animate-pulse">
          Loading, please wait...
        </p>
      </div>
    );
  };
  
  export default Loading;
  