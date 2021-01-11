import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import Login, { handleChange } from '../Login/Login.js';

describe('Login test', () => {
    test('validate input email', () => {
        const name = 'email';
        const value = 'prueba@hotmail.com';
        expect(handleChange(name,value)).toBe(value)
    })
})
