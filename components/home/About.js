import Image from 'next/image';

import images from '../../public/images.png';
import { Button } from '../shared/Button';
import Partner from '../shared/Partner';

const About = () => {
  return (
    <>
      <div className=' bg-steelBlue-50'>
        <div className='max-w-container mx-auto px-4 py-28'>
          {/* Partner */}
          <Partner />
          {/* About us  */}

          <div className='flex gap-20 items-center px-5 mt-20'>
            <div className='mt-10'>
              <Image src={images} width={2000} height={500} alt='' />
            </div>
            <div>
              <h3 className='text-md text-steelBlue-100'>About us</h3>
              <h1 className='text-4xl font-semibold text-steelBlue-200 mt-7'>Owner and investor with a reputation</h1>
              <p className='text-sm text-steelBlue-200 leading-loose  my-7'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada
                pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper
                enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </p>
              <Button name='Explore' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
