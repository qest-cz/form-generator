import { set } from 'lodash';
import { useMemo } from 'react';
import { FormField } from '../../types';

const useGetIntialValues = (fields: FormField[]): Record<string, FormField['initialValue']> => {
    return useMemo(() => {
        return fields.reduce(
            (acc, { name, initialValue }) => (initialValue ? set(acc, name, initialValue) : acc),
            {},
        );
    }, [fields]);
};

export default useGetIntialValues;
