import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
    it('should render Home component', ()=> {
        render(<Home />)
    });
});