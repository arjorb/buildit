import Image from 'next/image';

const Card = ({ image }) => {
  return (
    <>
      <div className=' w-60 h-auto bg-steelBlue-50 shadow-2xl shadow-blue-300 rounded-md'>
        <Image src={image} alt='' />
        <div className='mx-3 my-5 space-y-1'>
          <h2 className='text-sm text-steelBlue-200 font-bold'>Name Surname</h2>
          <p className='text-sm text-steelBlue-200'>Worker</p>
        </div>
      </div>
    </>
  );
};

export default Card;
