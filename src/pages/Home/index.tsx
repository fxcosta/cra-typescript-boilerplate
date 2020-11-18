import React from 'react';
import { useGlobalStore } from '../../store/global';

import * as S from './styles';

const Home: React.FC = () => {
  const { token } = useGlobalStore(store => store.state);
  const { setToken } = useGlobalStore(store => store.actions);

  return (
    <S.Container>
      <p>{token}</p>

      <button
        onClick={() => setToken(Math.random().toString(36).substring(7))}
        type="button"
      >
        Mudar de token
      </button>
    </S.Container>
  );
};

export default Home;
