export function Option({ index, onclick, children }) {
  return (
    <div
      className="h-[56px] w-[50%] min-w-[255px] p-4 flex items-center gap-2  text-white rounded-full cursor-pointer bg-[#00000073] 
      lg:bg-[#1111111a] lg:text-black 
      hover:outline-[#7d00fe] hover:outline-2 hover:outline"
      onClick={onclick}
    >
      <div className="h-full w-auto rounded-full bg-[#7d00fe] text-white aspect-square flex items-center justify-center">
        <p>{String.fromCharCode(97 + index).toLocaleUpperCase()}</p>
      </div>
      <p className="text-[18px]">{children}</p>
    </div>
  );
}
