import { cleanup } from '@testing-library/react';
import { renderHook } from 'react-hooks-testing-library';
import { string } from 'yup';
import useGetValidationSchema from '.';

afterEach(async () => {
    cleanup();
});

describe('formGenerator - useGetValidationSchema', () => {
    test('should only register components with validation property', () => {
        const fields = [
            {
                name: 'input',
                validation: string().required('required'),
            },
            {
                name: 'numberInput',
            },
        ];

        const { result } = renderHook(() => useGetValidationSchema(fields));

        expect((result.current as any).fields.input).toBeTruthy();
        expect((result.current as any).fields.numberInput).toBeFalsy();
    });

    test('should only register components with validation property - nested property', () => {
        const fields = [
            {
                name: 'input.nested',
                validation: string().required('required'),
            },
            {
                name: 'numberInput.nested',
            },
        ];

        const { result } = renderHook(() => useGetValidationSchema(fields));

        expect((result.current as any).fields.input.fields.nested).toBeTruthy();
        expect((result.current as any).fields.numberInput.fields.nested).toBeFalsy();
    });
});
