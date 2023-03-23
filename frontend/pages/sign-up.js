import styles from '../styles/pages/SignUp.module.css';

import Head from 'next/head';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign up - Pharma Allocation</title>
      </Head>

      <div className={styles.container}>
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
