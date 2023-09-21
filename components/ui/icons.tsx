'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconSolomon({ 
    className, 
    ...props 
    }: React.ComponentProps<'svg'>) {
    return (
        <svg width="820" height="820" viewBox="0 0 820 820" fill="none" className={cn('h-32 w-32', className)} xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_460_2)">
        <circle cx="410" cy="410" r="200" fill="#FF2264"/>
        </g>
        <g filter="url(#filter1_b_460_2)">
        <circle cx="410" cy="410" r="150" fill="#1E1E1E"/>
        </g>
        <defs>
        <filter id="filter0_f_460_2" x="0.625" y="0.625" width="818.75" height="818.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="104.688" result="effect1_foregroundBlur_460_2"/>
        </filter>
        <filter id="filter1_b_460_2" x="193" y="193" width="434" height="434" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="33.5"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_460_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_460_2" result="shape"/>
        </filter>
        </defs>
        </svg>
    )
  }

function IconUser({ 
    className, 
    ...props 
    }: React.ComponentProps<'svg'>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            className={cn('h-4 w-4', className)}
            {...props}
        >
            <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
        </svg>
        )
    }

function IconStop({
    className,
    style,
    ...props
    }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className={cn('h-4 w-4', className)}
            style={style}>
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H15V15H9V9Z"></path>
        </svg>
        )
    }

function IconDownload({
    className,
    ...props
    }: React.ComponentProps<'svg'>) {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
        </svg>
        )
    }

function IconRefresh({
    className,
    style,
    ...props
    }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className={cn('h-4 w-4', className)}
            style={style}>
                <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
        </svg>
    )
}

function IconDown({
    className,
    style,
    ...props
}: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className={cn('h-4 w-4', className)}
            style={style}>
                <path d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z"></path>
        </svg>
    )
}

function IconArrowElbow({
    className,
    ...props
  }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            fill='white'
            className={cn('h-6 w-6', className)}>
                <path d="M19.0003 13.9999L19.0004 5.00003L17.0004 5L17.0003 11.9999L6.82845 12L10.7782 8.05027L9.36396 6.63606L3 13L9.36396 19.364L10.7782 17.9498L6.8284 14L19.0003 13.9999Z"></path>
        </svg>
    )
  }
    

function IconCheck({
    className,
    style,
    ...props
  }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            style={style}>
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
        </svg>
    )
  }

function IconCopy({
    className,
    style,
    ...props
  }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"            
            style={style}>
                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
        </svg>
    )
  }

function IconPlus({
    className,
    ...props
  }: React.ComponentProps<'svg'>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
        </svg>
    )
  }

export {
    IconSolomon,
    IconUser,
    IconStop,
    IconDownload,
    IconRefresh,
    IconDown,
    IconArrowElbow,
    IconCheck,
    IconCopy,
    IconPlus
  }