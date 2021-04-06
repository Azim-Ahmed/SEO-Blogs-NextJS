import Link from 'next/link';
import { Col, Container, Row } from 'reactstrap';
import SignUpComponent from '../components/Auth/SignUpComponent';
import { Layout } from '../components/Layout';

const SignUp = (props) => {
  return (
    <Layout>
      <Container>
        <h2 className='text-center my-5 py-3'>Signup</h2>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <SignUpComponent />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUp;
