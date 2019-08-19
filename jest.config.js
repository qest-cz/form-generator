module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.json',
        },
    },
    roots: ['./lib'],
    moduleNameMapper: {
        '^lib(.*)$': '<rootDir>/src/$1',
    },
};
