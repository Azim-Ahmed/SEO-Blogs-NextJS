import Link from 'next/link';
import { Layout } from '../components/Layout';

const SignIn = (props) => {
  return (
    <Layout>
      <h1>SignIn</h1>

      <Link href='/'>
        <a>home</a>
      </Link>
    </Layout>
  );
};

export default SignIn;
