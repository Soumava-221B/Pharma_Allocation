import styles from '../styles/pages/Home.module.css';
import withAuth from '../withAuth';
import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  const { user } = useUserContext();

  return (
    <Layout>
      <Head>
        <title>Dashboard - Pharma Allocation</title>
      </Head>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles['welcome-text']}>
          Welcome, {user?.metadata?.firstName || 'stranger'}{' '}
          <span role="img" alt="hello">
            👋
          </span>
        </p>

        <p className={styles['info-text']}>
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 0, width:"100%" }} className="bg-gray-100">
        <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
            © MedBridge. All rights reserved.
    </div>
  </div>
    </Layout>

  );
}

export default withAuth(Home);