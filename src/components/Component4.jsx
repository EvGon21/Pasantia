const Component4 = (props) => {
  const count = props.data.split("").filter(char => char === 'a' || char === 'A').length;

  return (
    <div className="bg-sky-950">
      <div className="border-white border-2 text-white font-bold">Conteo {count}</div>
      <div className="border-2 border-stone-500">{props.count}</div>
    </div>
  );
};

export default Component4;
