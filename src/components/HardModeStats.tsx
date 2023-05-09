function HardModeStats({leftAttempts}) {
  return (
    <>
    <div className="flex flex-col bg-red-600 absolute top-0 left-1/3 translate-x-32 h-16 justify-center items-center shadow-md text-white  mt-2 rounded-full p-2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </span>
      <span>{leftAttempts}</span>
    </div>
    
    </>
  );
}
export default HardModeStats;
