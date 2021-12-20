import Link from 'next/link';

export default function Header() {
  const directories = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'pricing',
      path: '/pricing',
    },
    {
      name: 'demo',
      path: '/demo',
    },
  ];

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {directories.map((d, i: number) => (
        <Link key={i} href={d.path}>
          {d.name}
        </Link>
      ))}
    </header>
  );
}
