import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Starship Store' },
    {
      name: 'description',
      content: 'The best starships in the universe are only here!',
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to our Shop!</h1>
      <ul>
        <li>
          <a target="_blank" href="/catalog" rel="noreferrer">
            Go to Catalog!
          </a>
        </li>
      </ul>
    </div>
  );
}
