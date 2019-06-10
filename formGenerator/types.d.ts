/// <reference types="react" />
import { AutoCompleteProps, CascaderProps, CheckboxProps, DatePickerProps, InputNumberProps, InputProps, MentionProps, RateProps, SelectProps, SliderProps, SwitchProps, TimePickerProps, TransferProps, TreeSelectProps } from '@jbuschke/formik-antd';
import { ButtonProps } from 'antd/lib/button';
import { RadioProps } from 'antd/lib/radio';
import { FormikActions, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import { FieldProps } from './Field';
export interface FormDefinition {
    onSubmit: (values: FormikValues, formProps: FormikActions<FormikValues>) => Promise<any> | void;
    fields: FormField[];
}
export interface FormField extends RenderReadyFormField {
    validation?: Yup.Schema<{}>;
    initialValue?: string | number | boolean;
}
export interface RenderReadyFormField extends CombinedComponentProps, FieldItemProps {
    name: string;
    component?: string;
    inputStyle?: CombinedComponentProps["style"];
    custom?: (formikProps: FormikProps<any>) => JSX.Element;
    children?: any;
    propMapping?: (fieldProps?: FieldProps) => Record<string, string>;
    [dynamicProp: string]: any;
}
interface FieldItemProps {
    label?: string;
}
declare type CombinedComponentProps = Partial<AutoCompleteProps & ButtonProps & CascaderProps & CheckboxProps & DatePickerProps & InputProps & InputNumberProps & MentionProps & RadioProps & RateProps & SelectProps & SliderProps & SwitchProps & TimePickerProps & TransferProps & TreeSelectProps>;
export {};
