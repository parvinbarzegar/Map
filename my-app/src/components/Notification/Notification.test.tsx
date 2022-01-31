import React from 'react';
import { screen , render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Notification from './Notification';

describe('Test suits for <Notification/>',()=> {
    beforeEach(()=> {
        cleanup();
    })
    it('should match to snapshot',()=> {
        const { container } = render(<Notification type="info" message='info'/>);
        expect(container).toMatchSnapshot();
    })
    it('should render a text',()=> {
        render(<Notification type="info" message='info'/>);
        const div = screen.getByText(/info/)
        expect(div).toHaveTextContent('info');
    })
    it('should be a warning notiication',()=> {
        render(<Notification type="warning" message='It is warning'/>)
        const div = screen.getByText(/It/)
        expect(div).toHaveClass('notification--warning');
    })
    it('should be a warning notiication',()=> {
        render(<Notification type="success" message='success'/>)
        const div = screen.getByText(/success/)
        expect(div).toHaveClass('notification--success');
    })
    it('should be a warning notiication',()=> {
        render(<Notification type="info" message='info'/>)
        const div = screen.getByText(/info/)
        expect(div).toHaveClass('notification--info');
    })

})