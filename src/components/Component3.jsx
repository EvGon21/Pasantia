const Component3 = (props) => {
  //console.log(props.data.split(""));
  return (
    <div className="mt-5 flex flex-col content-center">
      <div className="flex justify-center content-around">
          {props.data.split("").map((item, index) => {
          //console.log(item, index);
          return <div className="mt-10 border-white w-16 border-2 flex justify-center text-center text-white font-bold">{item}</div>;
      })}
      </div>
      
    </div>
  );
};

export default Component3;
