import Image from 'next/image';
import Team1 from '../../public/Team-1.png';
import Team2 from '../../public/Team-2.png';
import Team3 from '../../public/Team-3.png';
import Team4 from '../../public/Team-4.png';
import Team5 from '../../public/Team-5.png';
import Team6 from '../../public/Team-6.png';
import Team7 from '../../public/Team-7.png';
import Team8 from '../../public/Team-8.png';
import Team9 from '../../public/Team-9.png';
import { Button } from '../shared/Button';

import Card from './Card';
const Team = () => {
  return (
    <>
      <div className=' bg-steelBlue-50'>
        <div className='max-w-container mx-auto px-4 py-28'>
          <h3 className='text-md text-steelBlue-100 text-center'>Our team</h3>
          <h1 className='text-4xl font-semibold text-steelBlue-200 mt-5 text-center'>Lets meet</h1>

          <div className='max-w-full mx-auto grid grid-cols-3 gap-10 mt-10 px-5'>
            <Card image={Team1} />
            <Card image={Team2} />
            <Card image={Team3} />
            <Card image={Team4} />
            <Card image={Team5} />
            <Card image={Team6} />
            <Card image={Team7} />
            <Card image={Team8} />
            <Card image={Team9} />
          </div>
          {/* call to action  */}
          <div className='flex justify-between items-center border-y py-7 border-steelBlue-100 mt-16'>
            <h1 className='text-4xl font-semibold text-steelBlue-200 mt-5'>Call</h1>
            <div className='flex gap-5'>
              <Button name='Call' />
              <Button name='Email' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
