import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import Blog from 'src/components/Blog';

const rootComponent = <Router><Blog /></Router>;

const target = document.getElementById('root');
render(rootComponent, target);