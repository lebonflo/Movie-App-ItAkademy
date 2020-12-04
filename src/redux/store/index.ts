import storeDev from './store.dev';
import storeProd from './store.prod';

export default __DEV__ ? storeDev : storeProd;
