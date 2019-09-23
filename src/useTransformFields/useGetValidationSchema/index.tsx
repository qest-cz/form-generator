import set from 'lodash/set';
import { useMemo } from 'react';
import { FieldDefinition } from 'src/types';
import { object, Schema } from 'yup';

// There is nothing to do with undefined
// Return because it is yup definition, no need to wrap it
const shouldReturn = (value: Schema<any> | object | undefined) => !value || (value && (value as any).isValid);

const transformObjectIntoShape = (val: Schema<any>): Schema<object> => {
    if (shouldReturn(val)) {
        return val;
    }

    const remappedObj = Object.entries(val).reduce((acc, [key, value]) => {
        return {
            ...acc,
            [key]: shouldReturn(value) ? value : transformObjectIntoShape(value),
        };
    }, {});

    return object().shape(remappedObj);
};

const transformShape = (fields: FieldDefinition[]) => {
    // @NOTE: if validation exists for field, set it. No mather nested path.
    const transformedShape = fields.reduce((acc, { name, validation }) => set(acc, name, validation), {} as Schema<any>);
    return transformObjectIntoShape(transformedShape);
};

const useGetValidationSchema = (fields: FieldDefinition[]): Schema<{}> => useMemo(() => transformShape(fields), [fields]);

export default useGetValidationSchema;
