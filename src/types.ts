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
import { FormikProps } from 'formik';
import { Schema } from 'yup';
import { ComponentMappingPros } from './componentMapping';

export interface FormRow extends RowProps {
    children: FormField[];
}

export interface FormField {
    validation?: Schema<{}>;
    initialValue?: any;
    row?: RowProps;
    col?: ColProps;
    name: string;
    component?: keyof ComponentMappingPros;
    children?: any;
    options?: any;
    propMapping?: (fieldProps: FormField) => Record<string, string>;
    rowStart?: boolean;
    rowEnd?: boolean;
    label?: string;
    fieldProps: any;
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

export interface SingleField {
    inputStyle?: CombinedComponentProps['style'];
    style?: CombinedComponentProps['style'];
    label?: string;
    custom?: (formikProps: FormikProps<any>) => JSX.Element;
    propMapping?: (fieldProps: FormField) => { [key: string]: string };
    name: string;
    options?: any;
}
