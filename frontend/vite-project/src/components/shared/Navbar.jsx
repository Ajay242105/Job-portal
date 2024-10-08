
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user=false;

  return (
    <div className='bg-white'>
      {/* -----------left --------------------------*/}
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-red-500'>Portal</span></h1>
        </div>
        {/* ---------------right------------------ */}
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ?(
              <div className='flex font-medium items-center gap-2'>
                <Link to="/login"><Button variant='outline'>Login</Button></Link>
                <Link to="/signup"><Button className='bg-sky-500 hover:bg-sky-600'>Signup</Button></Link>

                </div>
            ):
            <Popover>
            <PopoverTrigger asChild>
              <Avatar className='cursor-pointer'>
                <AvatarImage className='w-10 h-10 rounded-full object-cover' src="https://github.com/shadcn.png" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='bg-white'>
              <div className='flex gap-4 space-y-2'>
                <Avatar className='cursor-pointer'>
                  <AvatarImage className='w-10 h-10 rounded-full' src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <h4>Aj MERNStack</h4>
                  <p className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className='flex flex-col my-2  text-gray-600' >
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <User2/>
                <Button variant='link'>View Profile</Button>

                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut/>
                <Button variant='link'>Logout</Button>

                </div>

              </div>

            </PopoverContent>
          </Popover>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;