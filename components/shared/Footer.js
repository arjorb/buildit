import Link from 'next/link';
import Image from 'next/image';
import instgram from '../../public/instagram.png';
import facebook from '../../public/facebook.png';
const Footer = () => {
  return (
    <>
      <footer className=' bg-steelBlue-200 text-white'>
        <div className='max-w-container mx-auto px-4 py-28 text-sm'>
          {/* upper */}
          <div className='flex justify-between h-48'>
            <div className='flex flex-col justify-between'>
              <div>
                <p className='text-xl font-bold mb-5'>Buildit</p>
                <p>Development company, 2022</p>
              </div>
              <div>
                Site design - <span className='underline underline-offset-4'>⏰ Alarm</span>
              </div>
            </div>
            <div className='flex flex-col h-48 justify-between'>
              <div className='flex flex-col space-y-3'>
                <Link href='/'>Services 1</Link>
                <Link href='/'>Services 2</Link>
                <Link href='/'>Services 3</Link>
                <Link href='/'>Services 4</Link>
              </div>
              <div className='flex gap-3'>
                <Image className=' cursor-pointer' src={instgram} width={30} height={30} />
                <Image className=' cursor-pointer' src={facebook} width={30} height={30} />
              </div>
            </div>
            <div className='flex flex-col space-y-3'>
              <Link href='/'>About</Link>
              <Link href='/'>Services</Link>
              <Link href='/'>Projects</Link>
              <Link href='/'>Contact</Link>
            </div>
            <div className=' flex flex-col h-42 justify-between '>
              <div className='space-y-3'>
                <p>Get in touch</p>
                <p className=' leading-relaxed'>
                  60 Manor Station St. Fairport, <br /> NY 14450
                </p>
              </div>
              <div>
                <p>708-790-0000</p>
                <p>sales@buildit.site</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
