/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import CodeInstructionSet from "../assets/CodeInstructionSet";
import { Checkbox, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CodeInstruction = () => {
  const { introduction, consent, steps } = CodeInstructionSet;
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()

  const [, setCookie] = useCookies()

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = ()=>{
    setCookie('component', 'coding') 
    navigate("/coding")
  } 

  return (
    <>
      <div className="h-full overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-row h-full overflow-y-scroll overflow-x-hidden w-screen">
          <div className="bg-submain w-1/3">
            <p className="text-center mt-52 font-serif text-xl md:text-2xl lg:text-3xl font-bold p-5">
              Let's Prepare For Interview Format Coding Round
            </p>
          </div>
          <div className="info bg-last w-2/3  overflow-y-scroll">
            <div>
              <p className="text-center p-10 font-serif text-md md:text-lg lg:text-xl font-bold">
                {introduction}
              </p>

              <div className="overflow-y-scroll max-h-96 ">
                {steps.map((step, index) => (
                  <div key={index} className="p-4">
                    <h2 className="font-bold text-lg mb-2">{step.title}</h2>
                    <ul className="list-disc list-inside pl-5 space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}


<div className="mt-4">
                <Checkbox onChange={handleChecked}>
                  {consent}
                </Checkbox>

                {checked && (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      type="default"
                      htmlType="submit"
                      style={{ alignSelf: "end" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeInstruction;