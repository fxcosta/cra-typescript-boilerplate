import create from 'zustand';
import produce from 'immer';
import persist from '../persist';

type State = {
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
};

type Props = {
  state: State;
  actions: Actions;
};

export const useGlobalStore = create<Props>(
  persist(
    {
      key: 'global', // required, child key of storage
      denylist: ['actions'],
    },
    set => {
      const setState = (fn: any) => set(produce(fn));

      return {
        state: {
          token: 'red',
        },
        actions: {
          setToken: token =>
            setState(({ state }: Props) => {
              state.token = token;
            }),
        },
      };
    }
  )
);
