export function Button({ onclick, children }) {
  return (
    <button
      type="button"
      onClick={onclick}
      className="h-fit w-[50%] min-w-[256px] p-4 bg-[#7d00fe] text-white text-lg rounded-lg"
    >
      {children}
    </button>
  );
}
