import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Home</h1>
      <hr />
      <nav className="mt-6">
        <Link href="/portal" className="text-blue-500">Access the portal</Link> or {' '}
        <Link href="/portal/sign-up" className="text-blue-500">Create an account</Link>
      </nav>
    </main>
  )
}
