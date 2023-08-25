const Component2 = (props) => {
  function onChange(params) {
    props.setdata(params.target.value);
  }

  return (
    <div className="text-center">
      <input type="text" value={props.data} onChange={onChange} />
    </div>
  );
};

export default Component2;
