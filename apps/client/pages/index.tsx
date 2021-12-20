import { motion } from 'framer-motion';
import PageComponent from './components/PageComponent';
import styles from './index.module.scss';

export function Index() {
  return (
    <PageComponent>
      <h1>Home</h1>
      <div>Home screen</div>
    </PageComponent>
  );
}

export default Index;
