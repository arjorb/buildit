import Image from 'next/image';

const Card = ({ icon, title, desc }) => {
  return (
    <>
      <div>
        <Image src={icon} alt='' width='60' />
        <h2 className='text-xl text-steelBlue-200 font-bold mt-6'>{title}</h2>
        <p className='text-sm text-steelBlue-200 mt-4 w-56'>{desc}</p>
      </div>
    </>
  );
};

export default Card;
