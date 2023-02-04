import { useState } from "react";
import { Suspense } from "react";
import { useEffect } from "react";
import { Loading } from "./components/Loading";
import { lazy } from "react";
import "./App.css";
import {DATA} from "./static/data";
const Section = lazy(() => import("./components/Section"));


function App() {
  let [isNavigated, setIsNavigated] = useState(true);
  let [sections, setSections] = useState([]);

  /**
   * initializing the sections array for the welcome section, trige
   * Trigger only once
   */
  useEffect(() => {
    setSections(() => [DATA[0]]);
  }, []);

  /**
   * Scroll the window a certain height
   * Triggers when we navigate to another section
   */
  useEffect(() => {
    isNavigated
      ? ((document.querySelector("#root").scrollTop =
          (sections.length - 1) * window.innerHeight),
        setIsNavigated(false))
      : null;
  });

  // FUNCTION : adds section to the sections array
  function addSection(index) {
    setSections((prevState) => [...prevState, DATA[index]]);
    setIsNavigated(true);
  }

  return (
    <div className="h-fit w-fit">
      <Suspense fallback={<Loading />}>
      {sections.map((sectionData, index) => (
            <Section
              key={index}
              sectionData={sectionData}
              addSection={addSection}
            />
      ))}
      </Suspense>
    </div>
  );
}

export default App;