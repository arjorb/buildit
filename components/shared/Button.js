export const Button = ({ name }) => {
  return (
    <>
      <div className=' bg-steelBlue-100 px-5 py-2 rounded-2 text-sm text-white font-medium cursor-pointer'>{name}</div>
    </>
  );
};

export const BigButton = ({ name }) => {
  return (
    <>
      <div className=' bg-steelBlue-100 px-5 py-5 rounded-2 text-sm text-white font-medium cursor-pointer'>{name}</div>
    </>
  );
};
