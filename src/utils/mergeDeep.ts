// tslint:disable:mccabe-complexity
const isObject = (item: any) => item && typeof item === 'object' && !Array.isArray(item);

const mergeNew = (target: any, source: any): any => {
    // Nothing to look at, go away
    if (target === undefined) {
        return source;
    }
    if (source === undefined) {
        return target;
    }

    // We know how to handle arrays! We don't merge those.
    if (Array.isArray(source)) {
        return source;
    }

    // Nothing to merge here
    // @NOTE: we might want to merge arrays here later on
    if (!isObject(source) || !isObject(target)) {
        return source;
    }

    // Replace empty object with whatever we have insted of it
    if (!Object.entries(target || {}).length) {
        return source;
    }

    const entries = [...Object.entries(target || {}), ...Object.entries(source || {})];

    const isHardToMerge = entries.reduce((acc, val) => (acc ? acc : isObject(val[1])), false);
    // Let's do it!
    if (!isHardToMerge) {
        return { ...target, ...source };
    }

    // So it's hard, okay then
    return entries
        .map(([key]) => key)
        .reduce((acc, key) => {
            // Check if we actually want to have undefined here
            return source.hasOwnProperty(key) && source[key] === undefined
                ? { ...acc, [key]: source[key] }
                : { ...acc, [key]: mergeNew(target[key], source[key]) };
        }, {});
};

export const mergeDeep = <T extends object, U extends object>(target: T, ...rest: U[]): T & U => rest.reduce(mergeNew, target);
export default mergeDeep;
