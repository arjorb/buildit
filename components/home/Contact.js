import Image from 'next/image';
import contact1 from '../../public/Contact-1.png';
import contact2 from '../../public/Contact-2.png';
import { FormButton } from '../shared/Button';
const Contact = () => {
  return (
    <>
      <div className='max-w-container mx-auto px-4 py-28'>
        <div className='flex gap-20 justify-between px-5 mt-20'>
          <div>
            <h3 className='text-md text-steelBlue-100'>Contact</h3>
            <h1 className='text-4xl font-semibold text-steelBlue-200 text-opacity-60 my-7'>Get In Touch</h1>
            {/* Contact */}
            <div className='space-y-10'>
              <div className='flex gap-5'>
                <Image src={contact1} width={50} alt='' />
                <div className='text-md font-medium text-steelBlue-200 text-opacity-60'>
                  <p>Tel</p>
                  <p className='font-bold'>708-790-0000</p>
                </div>
              </div>

              <div className='flex gap-5'>
                <Image src={contact2} width={50} alt='' />
                <div className='text-md font-medium text-steelBlue-200 text-opacity-60'>
                  <p>email</p>
                  <p>sales@buildit.com</p>
                </div>
              </div>

              <div className='flex gap-5'>
                <Image src={contact2} width={50} alt='' />
                <div className='text-md font-medium text-steelBlue-200 text-opacity-60'>
                  <p>office</p>
                  <p>60 Manor Station St.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-10 rounded-lg bg-steelBlue-50 shadow-2xl shadow-blue-200 text-sm'>
            <div className='flex gap-5'>
              <div className='flex flex-col'>
                <label className='text-steelBlue-200 text-opacity-60'>Name</label>
                <input
                  type='text'
                  className='w-full bg-transparent border h-8 border-steelBlue-200 border-opacity-20 outline-none rounded-sm'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-steelBlue-200 text-opacity-60'>Email</label>
                <input
                  type='email'
                  className='w-full bg-transparent border h-8 border-steelBlue-200 border-opacity-20 outline-none rounded-sm'
                />
              </div>
            </div>
            <div className='flex flex-col my-5'>
              <label className='text-steelBlue-200 text-opacity-60'>Subject</label>
              <input
                type='text'
                className='w-full bg-transparent border h-8 border-steelBlue-200 border-opacity-20 outline-none rounded-sm'
              />
            </div>

            <div className='flex flex-col mb-5'>
              <label className='text-steelBlue-200 text-opacity-60'>Message</label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='6'
                className='w-full bg-transparent border  border-steelBlue-200 border-opacity-20 outline-none rounded-sm resize-none'
              ></textarea>
            </div>

            <div>
              <FormButton name='Send message' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
