import Image from 'next/image';

import vector from '../../public/Vector.png';
import vector1 from '../../public/Vector-1.png';
import vector2 from '../../public/Vector-2.png';
import vector3 from '../../public/Vector-3.png';
import vector4 from '../../public/Vector-4.png';
const Partner = () => {
  return (
    <>
      <div className='flex justify-between px-48 border-y py-7 border-steelBlue-100'>
        <Image src={vector} width={50} alt='' />
        <Image src={vector1} width={50} alt='' />
        <Image src={vector2} width={180} alt='' />
        <Image src={vector3} width={70} alt='' />
        <Image src={vector4} width={80} alt='' />
      </div>
    </>
  );
};

export default Partner;
