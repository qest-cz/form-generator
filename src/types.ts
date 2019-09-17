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
import { ColProps } from 'antd/lib/col';
import { RadioProps } from 'antd/lib/radio';
import { RowProps } from 'antd/lib/row';
import { FormikActions, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';

export interface FormDefinition {
    onSubmit: (values: FormikValues, formProps: FormikActions<FormikValues>) => Promise<any> | void;
    fields: FormField[];
    gutter?: number;
    initialValues?: Record<string, any>;
    validation?: Record<string, any>;
}

export interface FormRow extends RowProps {
    children: FormField[];
}

export interface FormField extends RenderReadyFormField {
    validation?: Yup.Schema<{}>;
    initialValue?: any;
    row?: RowProps;
    col?: ColProps;
}

export interface RenderReadyFormField extends CombinedComponentProps, FieldItemProps {
    name: string;
    component?: string;
    inputStyle?: CombinedComponentProps['style'];
    custom?: (formikProps: FormikProps<any>) => JSX.Element;
    children?: any;
    options?: any;
    propMapping?: (fieldProps: FormField) => Record<string, string>;
    rowStart?: boolean;
    rowEnd?: boolean;
    [dynamicProp: string]: any;
}

interface FieldItemProps {
    label?: string;
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
        // TextAreaProps &
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
