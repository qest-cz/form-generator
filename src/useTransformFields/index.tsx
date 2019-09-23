import { FieldDefinition } from '../types';
import useGetIntialValues from './useGetInitialValues';
import useGetValidationSchema from './useGetValidationSchema';
import useRowSplitFields from './useRowSplitFields';

export const useTransformFields = (fields: FieldDefinition[], initVals: any, formGlobalGutter?: number) => {
    const initialValues = useGetIntialValues(fields, initVals);
    const validationSchema = useGetValidationSchema(fields);
    const rowSplitFields = useRowSplitFields(fields, formGlobalGutter);

    return { initialValues, validationSchema, rowSplitFields };
};
