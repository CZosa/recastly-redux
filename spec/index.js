
import actionSpec from './reduxSpec/actions.jsx';
import reducerSpec from './reduxSpec/reducers.js';
import storeSpec from './reduxSpec/store.js';
import containerSpec from './reduxSpec/containers.jsx';
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <containerSpec/>
  </Provider>
  ); 