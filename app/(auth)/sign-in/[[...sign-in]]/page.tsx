// app/(auth)/sign-in/[[...sign-in]]/page.tsx
import UserAuthForm from "@/components/onboarding/UserAuthForm"

export default function Home() {
  return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <UserAuthForm />
      </div>
  )
}