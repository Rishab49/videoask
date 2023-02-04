import { Button } from "./Button";
import { SubmitButton } from "./SubmitButton";

export function Form() {
  return (
    <form className="absolute h-screen w-screen lg:w-[50%] lg:left-[50%] flex flex-col items-stretch justify-between px-4 py-8 bg-white animate-fadeIn z-50" action="" >
      <div className="h-fit flex items-stretch justify-center flex-col gap-4">
        <p className="font-semibold text-lg">
          Before you go, please leave your contact details so we can get back to
          you...
        </p>
        <input
          type="text"
          className="h-[45px] p-2 border-b-[1px] border-slate-600 outline-none focus-within:border-black focus-within:border-b-2"
          placeholder="* Your Name"
          required
        ></input>
        <input
          type="email"
          className="h-[45px] p-2 border-b-[1px] border-slate-600 outline-none focus-within:border-black focus-within:border-b-2"
          placeholder="* Your Email"
          required
        ></input>
        <div className="flex items-start py-2 gap-2">
          <input type="checkbox" className="h-[25px] w-[25px]"></input>
          <p className="text-sm text-slate-600">
            * [Sample legal text] The personal data you have provided will be
            processed by XXXXX for purposes of providing you the service. The
            legal basis of the processing is XXXXX. Your data will not be
            transferred nor assigned to third parties. You can exercise your
            right to access, rectify and delete your data, as well as the other
            rights granted by law by sending an email to XXXXX. For further
            information, please check our privacy policy XXXXX.
          </p>
        </div>
      </div>
      <SubmitButton>Send Your Answer &rarr;</SubmitButton>
    </form>
  );
}
