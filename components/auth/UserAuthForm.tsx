'use client'

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session, User } from "@supabase/supabase-js";
import { useRouter } from 'next/navigation';

const UserAuthForm = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  type SessionType = {
    user: User | null;
    session: Session | null;
  } | null;
  
  const [session, setSession] = React.useState<SessionType>(null);
  
  const [formState, setFormState] = React.useState<{
    email: string
    password: string
  }>({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const { data: sessionData, error } = await supabase.auth.signInWithPassword({
      email: formState.email,
      password: formState.password,
    });

    if (sessionData) {
      const session: SessionType = {
        user: sessionData.user,
        session: sessionData.session,
      };
      setSession(session); 
      router.push('/chat'); // Redirect to chat page after successful sign-in
    } else if (error) {
      setError('An error occurred while signing in');
    }
    
    setIsLoading(false);

    if (error) {
      if (error.message === 'Invalid login credentials') {
        const { data: users, error: selectError } = await supabase
          .from('public')
          .select('email')
          .eq('email', formState.email);
  
        if (selectError) {
          setError('An error occurred while checking the user credentials');
        } else if (users.length === 0) {
          setError('No Account Found');
        } else {
          setError('Wrong Password');
        }
      } else {
        setError(error.message);
      }
    }
  };

  const isFormFilled = formState.email !== '' && formState.password !== '';

  return (
    <Card className="w-[350px]">
      <CardHeader className="p-4">
        <CardTitle>Access Solomon</CardTitle>
        <CardDescription>
            Discover our story, insights, and vision.<br />
            Your journey with East Park begins here.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input 
              id="email" 
              className={`text-custom-white bg-stone-900 bg-opacity-25 border-transparent focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none 
              ${error === 'No Account Found' ? 'border border-custom-white' : ''}`}               
              placeholder="Email" 
              value={formState.email} 
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>
            <div className="flex flex-col space-y-1.5">
              <Input 
                id="password" 
                type="password" 
                className={`text-custom-white bg-stone-900 bg-opacity-25 border-transparent focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none 
                  ${error === 'Wrong Password' ? 'border border-custom-white' : ''}`} 
                placeholder="Password" 
                value={formState.password}   
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormState({ ...formState, password: e.target.value })}
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
        </form>
      </CardContent>
      <CardFooter className="p-0 flex w-full h-12 border-b-custom-white">
        <Button 
          type="submit"
          onClick={handleSignIn}
          variant="default" 
          className={`w-full h-12 text-base border-x-0 border-t border-custom-white border-opacity-25 
            ${!isFormFilled || isLoading ? 
              "text-custom-white bg-transparent" : 
              "text-[#E7E6E9] bg-[#1E1E1E] bg-opacity-50"
            }`} 
          disabled={!isFormFilled || isLoading}>
            {isLoading ? 'Loading...' : 'Launch'}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UserAuthForm;