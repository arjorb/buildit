import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
const Navbar = () => {
  return (
    <>
      <div className='max-w-container mx-auto flex px-4 py-2 pt-12 justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <div className='w-9 h-9 bg-steelBlue-100 rounded-full shadow-xl shadow-steelBlue-100'></div>
          <p className='text-xl font-bold text-steelBlue-100'>
            <Link href='/'>Buildit</Link>
          </p>
        </div>
        <div className='flex gap-10 text-sm text-steelBlue-100 '>
          <Link href='/about'>About</Link>
          <Link href='/services'>Services</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div>
          <Button name={'Need a project?'} width={5} height={2} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
