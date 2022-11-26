import Image from 'next/image';
import Card1 from '../../public/Card-1.png';
import Card2 from '../../public/Card-2.png';
import Card3 from '../../public/Card-3.png';
import Card4 from '../../public/Card-4.png';
import Card5 from '../../public/Card-5.png';
import Card6 from '../../public/Card-6.png';
const Gallery = () => {
  return (
    <>
      <div className=' bg-steelBlue-50'>
        <div className='max-w-container mx-auto px-4 py-28'>
          <h3 className='text-md text-steelBlue-100 text-center'>Social</h3>
          <h1 className='text-4xl font-semibold text-steelBlue-200 mt-5 text-center'>On Instagram</h1>

          <div className='grid grid-cols-3 gap-5 mt-10 px-5'>
            <Image src={Card1} alt='' />
            <Image src={Card2} alt='' />
            <Image src={Card3} alt='' />
            <Image src={Card4} alt='' />
            <Image src={Card5} alt='' />
            <Image src={Card6} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
