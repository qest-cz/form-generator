import { cleanup } from '@testing-library/react';
import { renderHook } from 'react-hooks-testing-library';

import useGetIntialValues from '.';

afterEach(async () => {
    cleanup();
});

describe('formGenerator - useGetInitialValues', () => {
    test('should define emmpty initialValues for components, with no definition', () => {
        const fields = [
            {
                name: 'input',
            },
            {
                name: 'numberInput',
            },
        ];

        const { result } = renderHook(() => useGetIntialValues(fields));

        expect(result.current).toEqual({ input: '', numberInput: '' });
    });

    test('should propagate all initialValues', () => {
        const date = new Date();
        const fields = [
            {
                name: 'input',
                initialValue: 'input',
            },
            {
                name: 'button',
                initialValue: date,
            },
            {
                name: 'numberInput',
                initialValue: 30,
            },
            {
                name: 'switch',
                initialValue: true,
            },
        ];

        const { result } = renderHook(() => useGetIntialValues(fields));

        expect(result.current).toEqual({
            input: 'input',
            button: date,
            numberInput: 30,
            switch: true,
        });
    });

    test('should fail gracefuly', () => {
        const fields = [
            {
                name: 'switch',
                initialValue: true,
            },
            3,
        ];

        const { result } = renderHook(() => useGetIntialValues(fields as any));

        expect(result.current).toEqual({
            switch: true,
        });
    });
});
