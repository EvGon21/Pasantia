const Component2 = (props) => {
  function onChange(params) {
    props.setdata(params.target.value);
  }

  return (
    <div className="flex pt-10 border-2 border-cyan-300 h-28 mt-10 justify-center">
      <input className="flex content-center w-4/6 h-2/5 text-center" type="text" value={props.data} onChange={onChange} />
    </div>
  );
};

export default Component2;
