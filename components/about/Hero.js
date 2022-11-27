import Navbar from '../shared/Navbar';
import Image from 'next/image';
import hero1 from '../../public/Rectangle-152.png';
import hero2 from '../../public/Rectangle-151.png';

const Hero = () => {
  return (
    <>
      <div className='h-100 bg-steelBlue-50'>
        <Navbar />
        {/* hero section  */}
        <div className='max-w-container  mx-auto px-4 md:px-16 flex  gap-40 mt-16'>
          <div className='flex flex-col gap-10'>
            <div className='relative'>
              <Image src={hero1} width={280} alt='' />
              <Image className='absolute top-40 left-40' src={hero2} width={200} alt='' />
            </div>
          </div>

          <div className='w-45 mt-20'>
            <h3 className='text-md text-steelBlue-100'>About</h3>
            <h1 className='text-4xl font-semibold text-steelBlue-200 mt-7'>Owner and investor with a reputation</h1>
            <p className='text-sm text-steelBlue-200 leading-loose  my-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada
              pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper
              enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum.
              Mauris dui tortor, viverra vel ultrices in, congue sed ex.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
