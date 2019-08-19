import { cleanup } from '@testing-library/react';
import { renderHook } from 'react-hooks-testing-library';
import * as Yup from 'yup';

import useGetValidationSchema from '.';

afterEach(async () => {
    cleanup();
});

describe('formGenerator - useGetValidationSchema', () => {
    test('should only register components with validation property', () => {
        const fields = [
            {
                name: 'input',
                validation: Yup.string().required('required'),
            },
            {
                name: 'numberInput',
            },
        ];

        const { result } = renderHook(() => useGetValidationSchema(fields));

        expect((result.current as any).fields.input).toBeTruthy();
        expect((result.current as any).fields.numberInput).toBeFalsy();
    });
});
