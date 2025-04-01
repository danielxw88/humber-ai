import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/history">Chat History</Link> |{' '}
      <Link href="/about">About the Chatbot</Link>
    </nav>
  );
}
