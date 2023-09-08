import Image from 'next/image'
import BackgroundVideo from '@/components/marketing/BackgroundVideo'
import MainContent from '@/components/marketing/MainContent'

export default function Home() {
  return (
    <div>
      <MainContent />
      <BackgroundVideo />
    </div>
  )
}