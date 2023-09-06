import Image from 'next/image'
import BackgroundVideo from '@/components/landing/BackgroundVideo'
import MainContent from '@/components/landing/MainContent'

export default function Home() {
  return (
    <div>
      <MainContent />
      <BackgroundVideo />
    </div>
  )
}