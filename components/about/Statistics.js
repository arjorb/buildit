import Image from 'next/image';
import stats1 from '../../public/stats-1.png';
import stats2 from '../../public/stats-2.png';
import stats3 from '../../public/stats-3.png';
import Partner from '../shared/Partner';

const Statistics = () => {
  return (
    <>
      <div className='max-w-container mx-auto px-4 py-36'>
        <h3 className='text-md text-steelBlue-100 opacity-60 text-center'>Statistics</h3>
        <h1 className='text-3xl text-steelBlue-200  font-semibold text-center'>Development in numbers</h1>
        <div className='max-w-full mx-auto flex justify-between  gap-5 mt-28 px-16 py-10 bg-steelBlue-50 mb-16 rounded-md shadow-2xl shadow-steelBlue-50'>
          <div className='flex gap-7'>
            <Image src={stats1} width={60} alt='' />
            <div className='text-steelBlue-200'>
              <h3 className='text-4xl font-bold'> 200 +</h3>
              <p className='font-bold opacity-70'>Number</p>
            </div>
          </div>

          <div className='flex gap-7 border-x-2 px-20 border-x-steelBlue-200 border-opacity-60'>
            <Image src={stats2} width={60} alt='' />
            <div className='text-steelBlue-200'>
              <h3 className='text-4xl font-bold'> 70 +</h3>
              <p className='font-bold opacity-70'>Number </p>
            </div>
          </div>

          <div className='flex gap-7 '>
            <Image src={stats3} width={60} alt='' />
            <div className='text-steelBlue-200'>
              <h3 className='text-4xl font-bold'> 20 +</h3>
              <p className='font-bold opacity-70'>Number </p>
            </div>
          </div>
        </div>
        <Partner />
      </div>
    </>
  );
};

export default Statistics;
