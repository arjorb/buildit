export const Button = ({ name, width, height, color, text }) => {
  return (
    <>
      <div
        className={` bg-${color} max-w-max px-${width} py-${height} rounded-2 text-sm text-${text} font-medium cursor-pointer`}
      >
        {name}
      </div>
    </>
  );
};

export const BigButton = ({ name, color, text }) => {
  return (
    <>
      <div className={` bg-${color} max-w-max px-16 py-5 rounded-2 text-sm text-${text} font-medium cursor-pointer`}>
        {name}
      </div>
    </>
  );
};

export const FormButton = ({ name }) => {
  return (
    <>
      <div className={` bg-steelBlue-100  text-center py-3 rounded-2 text-sm text-white font-medium cursor-pointer`}>
        {name}
      </div>
    </>
  );
};

export const CallButton = ({ name, color, text }) => {
  return (
    <>
      <div
        className={` bg-steelBlue-100  text-center px-10 py-3 rounded-3 text-sm text-white font-medium cursor-pointer`}
      >
        {name}
      </div>
    </>
  );
};
