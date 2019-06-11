import { cleanup } from '@testing-library/react';
import { renderHook } from 'react-hooks-testing-library';

import useRowSplitFields from '.';

afterEach(async () => {
    cleanup();
});

const GUTTER_SIZE = 0;

describe('formGenerator - useRowSplitFields', () => {
    test('should correctly group `rowStart` and `rowEnd`', () => {
        const fields = [
            {
                name: 'input',
                rowStart: true,
            },
            {
                name: 'numberInput',
                rowEnd: true,
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [
                    { name: 'input', rowStart: true },
                    { name: 'numberInput', rowEnd: true },
                ],
                gutter: GUTTER_SIZE,
            },
        ]);
    });

    test('should ignore multiple `rowStarts`', () => {
        const fields = [
            {
                name: 'input',
                rowStart: true,
            },
            {
                name: 'input2',
                rowStart: true,
            },
            {
                name: 'input3',
                rowStart: true,
            },
            {
                name: 'numberInput',
                rowEnd: true,
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [
                    { name: 'input', rowStart: true },
                    { name: 'input2', rowStart: true },
                    { name: 'input3', rowStart: true },
                    { name: 'numberInput', rowEnd: true },
                ],
                gutter: GUTTER_SIZE,
            },
        ]);
    });

    test('should endRow at the end if no fields has defined `rowEnd`', () => {
        const fields = [
            {
                name: 'input',
                rowStart: true,
            },
            {
                name: 'input2',
                rowStart: true,
            },
            {
                name: 'input3',
                rowStart: true,
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [
                    { name: 'input', rowStart: true },
                    { name: 'input2', rowStart: true },
                    { name: 'input3', rowStart: true },
                ],
                gutter: GUTTER_SIZE,
            },
        ]);
    });

    test('should group multiple', () => {
        const fields = [
            {
                name: 'input',
                rowStart: true,
            },
            {
                name: 'input2',
            },
            {
                name: 'input3',
                rowStart: true,
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [
                    { name: 'input', rowStart: true },
                    { name: 'input2' },
                    { name: 'input3', rowStart: true },
                ],
                gutter: GUTTER_SIZE,
            },
        ]);
    });

    test('should create orphan if there is no `rowStart`', () => {
        const fields = [
            {
                name: 'input',
            },
            {
                name: 'input2',
                rowEnd: true,
            },
            {
                name: 'input3',
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [{ name: 'input' }],
                gutter: GUTTER_SIZE,
            },
            {
                children: [{ name: 'input2', rowEnd: true }],
                gutter: GUTTER_SIZE,
            },
            {
                children: [{ name: 'input3' }],
                gutter: GUTTER_SIZE,
            },
        ]);
    });

    test('gutter should be overwritten by last component in currentRow', () => {
        const fields = [
            {
                name: 'input',
                row: { gutter: 6 },
                rowStart: true,
            },
            {
                name: 'input2',
                row: { gutter: 12 },
                rowEnd: true,
            },
            {
                name: 'input3',
                row: { gutter: 26 },
            },
        ];

        const { result } = renderHook(() => useRowSplitFields(fields, GUTTER_SIZE));

        expect(result.current).toEqual([
            {
                children: [
                    { name: 'input', rowStart: true, row: { gutter: 6 } },
                    { name: 'input2', rowEnd: true, row: { gutter: 12 } },
                ],
                gutter: 12,
            },
            {
                children: [{ name: 'input3', row: { gutter: 26 } }],
                gutter: 26,
            },
        ]);
    });
});
