import {
    AutoCompleteProps,
    CascaderProps,
    CheckboxGroupProps,
    CheckboxProps,
    DatePickerProps,
    InputNumberProps,
    InputProps,
    RateProps,
    SelectProps,
    SliderProps,
    SwitchProps,
    TimePickerProps,
    TransferProps,
    TreeSelectProps,
} from '@jbuschke/formik-antd';
import { ButtonProps } from 'antd/lib/button';
import { RadioProps } from 'antd/lib/radio';
import { FieldProps as FormikFieldProps, FormikActions, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';

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
    inputStyle?: CombinedComponentProps['style'];
    custom?: (formikProps: FormikProps<any>) => JSX.Element;
    children?: any;
    options?: any;
    propMapping?: (fieldProps: ExtendedFormField) => Record<string, string>;
    [dynamicProp: string]: any;
}

interface FieldItemProps {
    label?: string;
}

export interface ExtendedFormField extends FormField {
    fieldProps: FormikFieldProps<FormikValues>;
}

export interface RadioGroupOption {
    label?: string;
    value: string;
    disabled?: boolean;
}

type CombinedComponentProps = Partial<
    AutoCompleteProps &
        ButtonProps &
        CascaderProps &
        CheckboxProps &
        CheckboxGroupProps &
        DatePickerProps &
        InputProps &
        InputNumberProps &
        RadioProps &
        RateProps &
        SelectProps &
        SliderProps &
        SwitchProps &
        TimePickerProps &
        TransferProps &
        TreeSelectProps
>;
