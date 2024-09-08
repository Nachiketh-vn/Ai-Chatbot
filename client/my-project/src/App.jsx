import React from "react";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [prompt, setprompt] = useState("");
  const [reply, setreply] = useState("");

  const [flag, setflag] = useState(false);

  const send = async (e) => {
    setflag(!flag);
    try {
      const response = await axios.post("http://localhost:3003/", {
        prompt,
      });
      setreply(response.data);
    } catch (error) {
      console.error("Error:", error);
      setreply("Error: Unable to get response");
    }
    setflag(!flag);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    send();
  };

  return (
    <div>
      <div className="h-[10vh] w-full bg-purple-500 flex items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-white">AI ChatBot</h1>
      </div>

      <div className="flex justify-center mt-[5vh]">
        <form className="flex flex-col  gap-[3vh]">
          <div className="flex items-center">
            <label className="font-semibold p-3" htmlFor="prompt">
              Enter Your Prompt :
            </label>
            <textarea
              className="border-2 border-black rounded-md p-1 w-[20vw] h-[15vh]"
              onChange={(e) => {
                setprompt(e.target.value);
              }}
              id="prompt"
              type="text"
              placeholder="Enter Prompt"
              value={prompt}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 font-semibold w-[7vw] text-white rounded-full p-2 hover:bg-green-700 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col pl-10 pr-10 mt-[5vh] gap-[3vh]">
        <div>
          <h1 className="font-semibold">Response :</h1>
        </div>
        <div>
          {flag==false ? (
            <div className="h-12 w-12 ml-[47vw]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="12"
                  r="15"
                  cx="35"
                  cy="100"
                >
                  <animate
                    attributeName="cx"
                    calcMode="spline"
                    dur="2"
                    values="35;165;165;35;35"
                    keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                    repeatCount="indefinite"
                    begin="0"
                  ></animate>
                </circle>
                <circle
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="12"
                  opacity=".8"
                  r="15"
                  cx="35"
                  cy="100"
                >
                  <animate
                    attributeName="cx"
                    calcMode="spline"
                    dur="2"
                    values="35;165;165;35;35"
                    keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                    repeatCount="indefinite"
                    begin="0.05"
                  ></animate>
                </circle>
                <circle
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="12"
                  opacity=".6"
                  r="15"
                  cx="35"
                  cy="100"
                >
                  <animate
                    attributeName="cx"
                    calcMode="spline"
                    dur="2"
                    values="35;165;165;35;35"
                    keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                    repeatCount="indefinite"
                    begin=".1"
                  ></animate>
                </circle>
                <circle
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="12"
                  opacity=".4"
                  r="15"
                  cx="35"
                  cy="100"
                >
                  <animate
                    attributeName="cx"
                    calcMode="spline"
                    dur="2"
                    values="35;165;165;35;35"
                    keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                    repeatCount="indefinite"
                    begin=".15"
                  ></animate>
                </circle>
                <circle
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="12"
                  opacity=".2"
                  r="15"
                  cx="35"
                  cy="100"
                >
                  <animate
                    attributeName="cx"
                    calcMode="spline"
                    dur="2"
                    values="35;165;165;35;35"
                    keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
                    repeatCount="indefinite"
                    begin=".2"
                  ></animate>
                </circle>
              </svg>
            </div>
          ) : (
            <p>{reply}</p>
          )}
        </div>
      </div>
    </div>
  );
}
