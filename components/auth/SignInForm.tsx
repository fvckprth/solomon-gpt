'use client'

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';


interface SignInProps extends React.ComponentPropsWithoutRef<'div'> {
  action: 'sign-in'
}

export function SignInForm({
  className,
  action = 'sign-in',
  ...props
}: SignInProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter()
  
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const [formState, setFormState] = React.useState<{
    email: string
    password: string
  }>({
    email: '',
    password: '',
  })

  const signIn = async () => {
    setIsLoading(true);
    setError(null);
  
    const { email, password } = formState;
  
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
  
    if (error && error.message === 'Invalid login credentials') {
      
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('email');

        if (error) {
          console.error('Error fetching profiles:', error);
          setError('Error fetching profiles');
          setIsLoading(false);
          return;
        }

        const emails = profiles.map(profile => profile.email);
        if (emails.includes(email)) {
          setError('Incorrect Password');
        } else {
          setError('No Account Found');
        }
      }
  
    setIsLoading(false);
  };

  const handleOnSubmit = async (data: any) => {
    setIsLoading(true)

    const error = action === 'sign-in' ? await signIn() : null

    if (error) {
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    router.refresh()
  }

  const isFormFilled = formState.email !== '' && formState.password !== '';
  const { handleSubmit } = useForm();


return (
  <Card className="w-[350px]">
    <CardHeader className="p-4">
      <CardTitle>Access Solomon</CardTitle>
      <CardDescription>
        Discover our story, insights, and vision.<br />
        Your journey with East Park begins here.
      </CardDescription>
    </CardHeader>
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <CardContent className="px-4">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input 
              id="email" 
              className={`text-custom-white bg-stone-900 bg-opacity-25 border-transparent focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none 
              ${error === 'No Account Found' ? 'border border-custom-white' : ''}`}               
              placeholder="Email" 
              value={formState.email} 
              onChange={e =>
                setFormState(prev => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input 
              id="password" 
              type="password" 
              className={`text-custom-white bg-stone-900 bg-opacity-25 border-transparent focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none 
                ${error === 'Incorrect Password' ? 'border border-custom-white' : ''}`} 
              placeholder="Password" 
              value={formState.password}   
              onChange={e =>
                setFormState(prev => ({
                  ...prev,
                  password: e.target.value
                }))
              }
            />
            {error && (
              <div className="flex items-center pt-3">
                <span className="flex items-center h-10 p-3 border-custom-white bg-custom-white bg-opacity-25 text-custom-white text-base">
                  {error}
                </span>
              </div>
            )}
          </div>
        </div>
    </CardContent>
      <Button
          type="submit"
          variant="default" 
          className={`w-full h-12 text-base border-x-0 border-t border-custom-white border-opacity-25 
            ${!isFormFilled || isLoading ? 
              "text-custom-white bg-transparent" : 
              "text-[#E7E6E9] bg-[#1E1E1E] bg-opacity-50"
            }`} 
          disabled={!isFormFilled || isLoading}>
            {isLoading ? 'Loading...' : 'Launch'}
      </Button>
    </form>
  </Card>
  )
}