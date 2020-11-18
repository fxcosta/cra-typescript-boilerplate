import { configurePersist } from 'zustand-persist';

const { persist, purge } = configurePersist({
  storage: localStorage,
});

export { purge };
export default persist;
