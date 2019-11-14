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
    TextAreaProps,
    TimePickerProps,
    TransferProps,
    TreeSelectProps,
} from 'formik-antd';
import { ButtonProps } from 'antd/lib/button';
import { ColProps } from 'antd/lib/col';
import { RadioProps } from 'antd/lib/radio';
import { RowProps } from 'antd/lib/row';
import { FormikProps } from 'formik';
import { Schema } from 'yup';
import { ComponentMappingPros } from './componentMapping';
import { DEFAULT_COMPONENT } from './constants';

declare const RowAligns: ['top', 'middle', 'bottom'];
declare const RowJustify: ['start', 'end', 'center', 'space-around', 'space-between'];
declare type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface CommonFieldProps {
    rowStart?: boolean;
    rowEnd?: boolean;
    inputStyle?: CombinedComponentProps['style'];
    style?: CombinedComponentProps['style'];
    label?: string;
    validation?: Schema<any>;
    initialValue?: any;
    row?: RowProps;
    col?: ColProps;
    children?: any;
    custom?: (formikProps: FormikProps<any>) => JSX.Element;
    propMapping?: any;
    name: string;
}

export type FieldDefinition = CommonFieldProps &
    (
        | { component: 'autocomplete'; fieldProps?: ComponentMappingPros['autocomplete'] }
        | { component: 'button'; fieldProps?: ComponentMappingPros['button'] }
        | { component: 'cascader'; fieldProps?: ComponentMappingPros['cascader'] }
        | { component: 'checkbox'; fieldProps?: ComponentMappingPros['checkbox'] }
        | { component: 'checkboxGroup'; fieldProps?: ComponentMappingPros['checkboxGroup'] }
        | { component: 'datePicker'; fieldProps?: ComponentMappingPros['datePicker'] }
        | { component: 'input'; fieldProps?: ComponentMappingPros['input'] }
        | { component: 'textArea'; fieldProps?: ComponentMappingPros['textArea'] }
        | { component: 'inputNumber'; fieldProps?: ComponentMappingPros['inputNumber'] }
        | { component: 'radio'; fieldProps?: ComponentMappingPros['radio'] }
        | { component: 'radioGroup'; fieldProps?: ComponentMappingPros['radioGroup'] }
        | { component: 'rate'; fieldProps?: ComponentMappingPros['rate'] }
        | { component: 'select'; fieldProps?: ComponentMappingPros['select'] }
        | { component: 'slider'; fieldProps?: ComponentMappingPros['slider'] }
        | { component: 'switch'; fieldProps?: ComponentMappingPros['switch'] }
        | { component: 'timePicker'; fieldProps?: ComponentMappingPros['timePicker'] }
        | { component: 'transfer'; fieldProps?: ComponentMappingPros['transfer'] }
        | { component: 'treeSelect'; fieldProps?: ComponentMappingPros['treeSelect'] }
        | { component: 'textDivider'; fieldProps?: ComponentMappingPros['textDivider'] }
        | { component: 'custom'; fieldProps?: ComponentMappingPros['custom'] }
        | { component?: undefined; fieldProps?: ComponentMappingPros[typeof DEFAULT_COMPONENT] });

export interface FormRow {
    children: FieldDefinition[];
    gutter?: number | Partial<Record<Breakpoint, number>>;
    type?: 'flex';
    align?: (typeof RowAligns)[number];
    justify?: (typeof RowJustify)[number];
}

type CombinedComponentProps = Partial<
    AutoCompleteProps &
        ButtonProps &
        CascaderProps &
        CheckboxProps &
        CheckboxGroupProps &
        DatePickerProps &
        InputProps &
        TextAreaProps &
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

export * from './formGenerator';
