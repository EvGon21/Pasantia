import Component2 from "./Component2";
import Component3 from "./Component3";

const Component1 = (props) => {
  const { data, setdata } = props;
  return (
    <div className="flex h-screen border-2 border-blue-700 bg-sky-600 w-4/6 content-center flex-col">
      {props.children}
      <Component2 data={data} setdata={setdata} />
      <Component3 data={data} background="gray" />
    </div>
  );
};

export default Component1;
