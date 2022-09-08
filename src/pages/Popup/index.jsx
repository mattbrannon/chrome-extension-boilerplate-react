import { createRoot } from 'react-dom/client';

import Popup from './Popup';
import './index.css';

const container = window.document.querySelector('#app-container');
createRoot(container).render(<Popup />);
