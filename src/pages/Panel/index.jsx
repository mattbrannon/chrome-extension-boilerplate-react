import { createRoot } from 'react-dom/client';

import Panel from './Panel';
import './index.css';

const container = window.document.querySelector('#app-container');
createRoot(container).render(<Panel />);
