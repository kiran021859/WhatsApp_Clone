import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <button><Link href='/dashboard'>go to dashboard</Link></button>
    </div>
  );
}
