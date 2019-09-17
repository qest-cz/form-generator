import { set } from 'lodash';
import { useMemo } from 'react';
import { object, Schema } from 'yup';
import { FormField } from '../../types';

const transformObjectIntoShape = (val: Schema<any>): Schema<object> => {
    if (!val) {
        // There is nothing to do with undefined
        return val;
    }

    if (val.isValid) {
        // Return because it is yup definition, no need to wrap it
        return val;
    }

    const remappedObj = Object.entries(val).reduce((acc, [key, value]) => {
        return {
            ...acc,
            [key]:
                value && value.isValid
                    ? value
                    : !value
                    ? value
                    : transformObjectIntoShape(value as any),
        };
    }, {});

    return object().shape(remappedObj);
};

const useGetValidationSchema = (fields: FormField[]): Schema<{}> => {
    return useMemo(() => {
        const transformedShape = fields.reduce(
            (acc, { name, validation }) => (validation ? set(acc, name, validation) : acc),
            {},
        );

        return transformObjectIntoShape(transformedShape as any);
    }, [fields]);
};

export default useGetValidationSchema;
