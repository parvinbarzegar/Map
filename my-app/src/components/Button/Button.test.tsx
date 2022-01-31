import React from 'react';
import { screen , render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Test suits for <Button/>',()=> {
    beforeEach(()=> {
        cleanup();
    })
    it('should match to snapshot',()=> {
        const { container } = render(<Button>Hope</Button>);
        expect(container).toMatchSnapshot();
    })
    it('should render a text',()=> {
        render(<Button>Hello</Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveTextContent('Hello');
    })
    it('should call function when it is clicked',async()=> {
        const myClick = jest.fn();
        render(<Button onClick={()=>myClick}>hello</Button>);
        const btn = screen.getByRole('button');
        await userEvent.click(btn);
        expect(myClick).toHaveBeenCalled();
    })
    it('should be a primary button',()=> {
        render(<Button type="primary">hello</Button>)
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('button');
        expect(btn).toHaveClass('button--primary');
    })
    it('should be a secondry button',()=> {
        render(<Button type="secondry">hello</Button>)
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('button');
        expect(btn).toHaveClass('button--secondry');
    })
    it('should be a loading button',()=> {
        render(<Button type="loading">hello</Button>)
        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('button');
        expect(btn).toHaveClass('button--loading');
    })

})