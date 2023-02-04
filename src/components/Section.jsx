import { useState } from "react";
import { Button } from "./Button";
import { Form } from "./Form";
import { Option } from "./Option";
import { Video } from "./Video";

export default function Section({ sectionData, addSection }) {
  const [showForm,setShowForm] = useState(false);
  const optionStyle={
    blink:"animate-blink"
  }
  return (
    <div
      className="relative flex items-stretch justify-center w-screen h-screen snap-center"
      id={sectionData.title}
    >
      <div className="flex items-center justify-center flex-1">
        <Video src={sectionData.video} thumbnail={sectionData.thumbnail} track={sectionData.track} title={sectionData.title}/>
      </div>
      <div className="absolute bottom-[11%] lg:bottom-0 flex flex-col items-center lg:justify-center justify-end flex-1 w-full gap-2 p-4 lg:h-full h-[89%] lg:relative lg:p-0">
        {sectionData?.buttons?.map((button, index) => (
          <Button key={index} onclick={() => setShowForm((prevState) => !prevState)}>
            {button.text}
          </Button>
        ))}
        {sectionData?.options?.map((button, index) => (
          <Option
            key={index}
            index={index}
            onclick={(e) => {
              e.target.classList.add(`${optionStyle.blink}`)
              setTimeout(() => {
                addSection(button.linkIndex)
              },1000);
            }}
          >
            {button.text}
          </Option>
        ))}
      </div>
        {showForm ? <Form/> : ""}
    </div>
  );
}
