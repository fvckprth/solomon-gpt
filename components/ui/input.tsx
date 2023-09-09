// components/ui/input.tsx
import * as React from "react"
import { useState } from "react";
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  password?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm placeholder:text-custom-white placeholder:text-opacity-25 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <div 
          onClick={() => setShowPassword(!showPassword)} 
          className="h-7 p-2 bg-stone-900 bg-opacity-25 justify-start items-center inline-flex absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <div className="text-gray-200 text-xs text-opacity-25 self-center leading-none tracking-tight">
            {showPassword ? 'Hide' : 'Show'}
          </div>
        </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }