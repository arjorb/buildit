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
      <div className={` bg-${color} max-w-max px-14 py-4 rounded-2 text-sm text-${text} font-medium cursor-pointer`}>
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
      <div className={` bg-${color} text-center px-10 py-3 rounded-sm text-sm text-${text} font-medium cursor-pointer`}>
        {name}
      </div>
    </>
  );
};
