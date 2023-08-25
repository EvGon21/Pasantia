import { useState } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Component1 = (props) => {
  const [data, setdata] = useState("111");

  return (
    <div className="border-2 border-red-500 bg-blue-500">
      {props.children}
      <Component2 data={data} setdata={setdata} />
      <Component3 data={data} background="gray" />
    </div>
  );
};

export default Component1;
