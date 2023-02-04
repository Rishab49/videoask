export function SubmitButton({ onclick, children }) {
    return (
      <button
        type="submit"
        onClick={onclick}
        className="h-fit p-4 bg-[#7d00fe] text-white text-lg rounded-lg"
      >
        {children}
      </button>
    );
  }
  