import React from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';



const Signup = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>Full Name</Label>
            <Input type="text"
              name="fullname"
              placeholder="Ajay" ></Input>
          </div>

          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email"
              name="email"
              placeholder="patel@gmail.com"
            ></Input>
          </div>

          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="8080808080"
            />
          </div>

          <div className='flex items-center justify-between'>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">

                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>


            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
              />
            </div>

          </div>
          <Button className="w-full my-4">
            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
            </Button>

          
          <Button type="submit" className="w-full my-4">Signup</Button>
          <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>






        </form>

      </div>

    </div>
  )
}

export default Signup;

/*

*/