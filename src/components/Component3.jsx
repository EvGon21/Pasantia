const Component3 = (props) => {
  //console.log(props.data.split(""));
  return (
    <div className="bg-red-600">
      {props.data.split("").map((item, index) => {
        //console.log(item, index);
        return <div className="border-white border-2">{item}</div>;
      })}
    </div>
  );
};

export default Component3;
