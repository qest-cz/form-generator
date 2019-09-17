import { set } from 'lodash';
import { useMemo } from 'react';
import { object, Schema } from 'yup';
import { FormField } from '../../types';

const useGetValidationSchema = (fields: FormField[]): Schema<{}> => {
    return useMemo(() => {
        const validationSchemaShape: Record<string, Schema<{}>> = fields.reduce(
            (acc, { name, validation }) => set(acc, name, validation),
            {},
        );

        return object().shape({ ...validationSchemaShape });
    }, [fields]);
};

export default useGetValidationSchema;
