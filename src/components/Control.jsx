export function Control({ onclick, isActive, children }) {
  return (
    <div
      style={{
        backgroundColor: isActive ? "white" : "",
        color: isActive ? "black" : "white",
      }}
      className="h-[26px] w-[34px]  p-2 cursor-pointer text-sm border-2 border-white text-white  rounded-sm hover:scale-110 flex items-center justify-center transition-all"
      onClick={onclick}
    >
      {children}
    </div>
  );
}
