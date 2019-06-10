/// <reference types="react" />
import { FormikProps } from 'formik';
import { RenderReadyFormField } from './types';
export interface FieldProps {
    field: RenderReadyFormField;
    key: string;
    formProps: FormikProps<any>;
}
declare const Field: (props: FieldProps) => JSX.Element;
export default Field;
