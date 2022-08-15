import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { increaseCount, resetCount } from '../store/slice/count';

const Home = () => {
  const dispatch = useDispatch();
  const { count } = useAppSelector(state => state.count);

  return (
    <div>
      <p>{process.env.NEXT_PUBLIC_ENV}</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  );
};

export default Home;
