import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Map from '.';

beforeEach(() => {
    cleanup();
});

describe('Map', () => {
    test('returns corrent number of children', () => {
        const collection = [{ text: 'one' }, { text: 'two' }];

        const { container } = render(
            <Map collection={collection}>
                {({ text }, key) => (
                    <div key={key} data-testid="item">
                        {text}
                    </div>
                )}
            </Map>,
        );

        expect(collection.length).toEqual(container.childNodes.length);
    });

    test('prints text of all children', () => {
        const collection = [{ text: 'one' }, { text: 'two' }];

        const { getByText } = render(
            <Map collection={collection}>
                {({ text }, key) => (
                    <div key={key} data-testid="item">
                        {text}
                    </div>
                )}
            </Map>,
        );

        expect(getByText('one')).toBeTruthy();
        expect(getByText('two')).toBeTruthy();
    });

    test('works fine with empty array', () => {
        const collection = [] as any;

        const { container } = render(
            <Map collection={collection}>{({}, key) => <div key={key} data-testid="item" />}</Map>,
        );

        expect(container.children.length).toBe(0);
    });

    test('works with object', () => {
        const collection = { one: { text: 'one' }, two: { text: 'two' } };

        const { getByText } = render(
            <Map collection={collection}>
                {({ text }, key) => (
                    <div key={key} data-testid="item">
                        {text}
                    </div>
                )}
            </Map>,
        );

        expect(getByText('one')).toBeTruthy();
        expect(getByText('two')).toBeTruthy();
    });

    test('works fine with empty object', () => {
        const collection = {};

        const { container } = render(
            <Map collection={collection}>{({}, key) => <div key={key} data-testid="item" />}</Map>,
        );

        expect(container.children.length).toBe(0);
    });
});
