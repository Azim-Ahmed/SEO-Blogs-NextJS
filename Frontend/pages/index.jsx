import { Layout } from '../components/Layout';
import Link from 'next/link';

const Index = (props) => {
  return (
    <Layout>
      <h1>Index</h1>
      <Link href='/signin'>
        <a>Sign In</a>
      </Link>

      <Link href='/signup'>
        <a>Sign Up</a>
      </Link>
    </Layout>
  );
};

export default Index;
