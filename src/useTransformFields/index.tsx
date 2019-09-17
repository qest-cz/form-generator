import { FormField } from '../types';
import useGetIntialValues from './useGetInitialValues';
import useGetValidationSchema from './useGetValidationSchema';
import useRowSplitFields from './useRowSplitFields';

export const useTransformFields = (fields: FormField[], formGlobalGutter?: number) => {
    const initialValues = useGetIntialValues(fields);
    const validationSchema = useGetValidationSchema(fields);
    const rowSplitFields = useRowSplitFields(fields, formGlobalGutter);

    return { initialValues, validationSchema, rowSplitFields };
};
