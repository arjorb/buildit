import Image from 'next/image';
import icon1 from '../../public/Icon-1.png';
import icon2 from '../../public/Icon-2.png';
import icon3 from '../../public/Icon-3.png';
import Card from './Card';

const Execution = () => {
  return (
    <>
      <div className='max-w-container mx-auto px-4 py-36'>
        <h1 className='text-3xl  font-semibold text-center'>Innovative Execution</h1>
        <div className='flex justify-between gap-5 mt-20 px-16'>
          <Card
            icon={icon1}
            title='Featured Listing'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
          />
          <Card
            icon={icon2}
            title='Available Properties'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
          />
          <Card icon={icon3} title='In the News' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' />
        </div>
      </div>
    </>
  );
};

export default Execution;
