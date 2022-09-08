import { createRoot } from 'react-dom/client';

import Options from './Options';
import './index.css';

const container = window.document.querySelector('#app-container');
createRoot(container).render(<Options title={'Settings'} />);
