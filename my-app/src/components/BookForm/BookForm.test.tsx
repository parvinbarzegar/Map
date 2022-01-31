import React from 'react';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookForm from './BookForm';

describe('test suits for <BookForm/>',()=> {
    beforeEach(()=> {
        cleanup();
    })
    it('should match to the snapshot',()=> {
        const { container } = render(<BookForm onFinish={()=> jest.fn()}/>);
        expect(container).toMatchSnapshot();
    });
    test('boat name has a correct length', async ()=> {
        render(<BookForm onFinish={()=> jest.fn()}/>);
        const boatName = 'very very very verly loooooooooooong boat nammmmmmeeeeeeeeeeeeee';
        const input = screen.getByLabelText('Boat name');
        expect(input).toHaveProperty("maxLength", 20);
        expect(input).toHaveProperty("minLength",1);
        await userEvent.type(input, boatName);
        screen.getByDisplayValue(boatName.slice(0, 20));
    });
    test('boat name validation',async()=>{
        render(<BookForm onFinish={()=> jest.fn()}/>);
        const boatNameInput = screen.getByLabelText('Boat name');
        const submitButton = screen.getByRole('button');
        await userEvent.click(submitButton);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        userEvent.type(boatNameInput,'boat');
        await userEvent.click(submitButton);
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    })
})