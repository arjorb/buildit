import Image from 'next/image';
import photo0 from '../../public/Photo-0.png';
import photo1 from '../../public/Photo-1.png';
import photo2 from '../../public/Photo-2.png';
import photo3 from '../../public/Photo-3.png';
import { Button } from '../shared/Button';
const Properties = () => {
  return (
    <>
      <div className='max-w-container mx-auto px-4 py-28'>
        <div className='flex gap-20 items-center px-5 mt-20'>
          <div>
            <h3 className='text-md text-steelBlue-100'>Available Properties</h3>
            <h1 className='text-4xl font-semibold text-steelBlue-200 mt-7'>Featured Listing</h1>
            <p className='text-sm text-steelBlue-200 leading-loose  my-7'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada
              pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper
              enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum.
              Mauris dui tortor, viverra vel ultrices in, congue sed ex.
            </p>
            <Button name='Explore' width={16} color='steelBlue-100' height={3} text='white' className=' w-28' />
          </div>

          <div className='flex gap-5 mt-10'>
            <div className='flex flex-col gap-5 justify-start'>
              <Image src={photo3} width={1000} alt='' />
              <Image src={photo2} width={500} alt='' />
            </div>
            <div className='flex flex-col gap-5 '>
              <Image src={photo0} width={1000} alt='' />
              <Image src={photo1} width={1000} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
