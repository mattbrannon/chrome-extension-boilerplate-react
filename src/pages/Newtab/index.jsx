import { createRoot } from 'react-dom/client'

import Newtab from './Newtab';
import './index.css';

const container = window.document.querySelector('#app-container');
createRoot(container).render(<Newtab />);
