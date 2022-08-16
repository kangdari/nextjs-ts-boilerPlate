import { Button } from '@mui/material';
import Layout from '@components/Layout';

function Home() {
  return (
    <Layout>
      <div>
        <p>{process.env.NEXT_PUBLIC_ENV}</p>
        <Button variant="contained">Hello World</Button>
      </div>
    </Layout>
  );
}

export default Home;
