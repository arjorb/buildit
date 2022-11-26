import Navbar from '../shared/Navbar';
import { BigButton } from '../shared/Button';
import Image from 'next/image';
import hero1 from '../../public/hero1.png';
import hero2 from '../../public/hero2.png';
import hero3 from '../../public/hero3.png';
import hero4 from '../../public/hero4.png';
import hero5 from '../../public/hero5.png';
const Showcase = () => {
  return (
    <>
      <div className='h-100 bg-background-image  bg-cover bg-no-repeat'>
        <Navbar />
        {/* hero section  */}
        <div className='max-w-container  mx-auto px-4 flex justify-between gap-14 mt-16'>
          <div className=' w-[45%] mt-20'>
            <h2 className='text-6xl font-bold text-steelBlue-200 leading-tight'>Development company</h2>
            <p className='text-xl my-5 text-steelBlue-200 font-light tracking-wider'>
              Forward-thinking real estate developer, owner and investor with a reputation
            </p>
            <div className='flex gap-5 mt-5'>
              <BigButton name={'Servicees'} />
              <BigButton name={'About the company'} />
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex items-end gap-6'>
              <Image src={hero1} width={120} alt='' />
              <Image src={hero2} width={200} alt='' />
              <Image src={hero3} width={130} alt='' />
            </div>
            <div className='flex items-start gap-7'>
              <Image src={hero4} width={300} alt='' />
              <Image src={hero5} width={170} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
