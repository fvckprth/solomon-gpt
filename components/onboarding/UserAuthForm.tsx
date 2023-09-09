'use client'

import * as React from "react"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { z } from 'zod';

const UserAuthFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function UserAuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email !== "" && password !== "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = UserAuthFormSchema.safeParse({ email, password });

    if (!result.success) {
      // Handle validation errors here...
      console.error(result.error);
    } else {
      // Form data is valid, you can submit it...
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input 
                id="email" 
                className="text-custom-white bg-stone-900 bg-opacity-25 border-none focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input 
                id="password" 
                type="password" 
                className="pr-0 mr-0 text-custom-white bg-stone-900 bg-opacity-25 border-none focus-visible:text-custom-white focus:border-custom-white focus:outline-none focus:ring-none" 
                placeholder="Password" 
                value={password}   
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="p-0 flex w-full h-12 border-b-custom-white">
        <Button 
          variant="default" 
          className="w-full h-12 text-base text-custom-white bg-transparent border-x-0 border-t border-custom-white border-opacity-25" 
          disabled={!isFormFilled}>
            Launch
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UserAuthForm;