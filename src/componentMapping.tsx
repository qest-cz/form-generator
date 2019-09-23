import {
    AutoComplete,
    AutoCompleteProps,
    Cascader,
    CascaderProps,
    Checkbox,
    CheckboxGroupProps,
    CheckboxProps,
    DatePicker,
    DatePickerProps,
    Input,
    InputNumber,
    InputNumberProps,
    InputProps,
    Radio,
    RadioGroupProps,
    Rate,
    RateProps,
    Slider,
    SliderProps,
    Switch,
    SwitchProps,
    TextAreaProps,
    TimePicker,
    TimePickerProps,
    Transfer,
    TransferProps,
    TreeSelect,
    TreeSelectProps,
} from '@jbuschke/formik-antd';
import Button, { ButtonProps } from 'antd/lib/button';
import { FormikProps } from 'formik';
import React from 'react';
import Select, { Props as SelectProps } from './components/Select';
import TextDivider, { Props as TextDividerProps } from './components/TextDivider';

const { Group: CheckBoxGroup } = Checkbox;
const { Group: RadioGroup } = Radio;
const { TextArea } = Input;

export interface ComponentMappingPros {
    autocomplete: AutoCompleteProps;
    button: ButtonProps;
    cascader: CascaderProps;
    checkbox: CheckboxProps;
    checkboxGroup: CheckboxGroupProps;
    datePicker: DatePickerProps;
    input: InputProps;
    textArea: TextAreaProps;
    inputNumber: InputNumberProps;
    radio: RadioGroupProps;
    radioGroup: RadioGroupProps;
    rate: RateProps;
    select: SelectProps;
    slider: SliderProps;
    switch: SwitchProps;
    timePicker: TimePickerProps;
    transfer: TransferProps;
    textDivider: TextDividerProps;
    treeSelect: TreeSelectProps;
    custom: (formikProps: FormikProps<any>) => JSX.Element;
}

type ComponentFunction = { [K in keyof ComponentMappingPros]: (params: ComponentMappingPros[K]) => JSX.Element };

export const formComponentMapping: ComponentFunction = {
    autocomplete: params => <AutoComplete {...params} />,
    button: params => <Button {...params} />,
    cascader: params => <Cascader {...params} />,
    checkbox: params => <Checkbox {...params} />,
    checkboxGroup: params => <CheckBoxGroup {...params} />,
    datePicker: params => <DatePicker {...params} />,
    input: params => <Input {...params} />,
    textArea: params => <TextArea {...params} />,
    inputNumber: params => <InputNumber {...params} />,
    radio: params => <Radio {...params} />,
    radioGroup: params => <RadioGroup {...params} />,
    rate: params => <Rate {...params} />,
    select: params => <Select {...params} />,
    slider: params => <Slider {...params} />,
    switch: params => <Switch {...params} />,
    timePicker: params => <TimePicker {...params} />,
    transfer: params => <Transfer {...params} />,
    treeSelect: params => <TreeSelect {...params} />,
    textDivider: params => <TextDivider {...params} />,
    custom: params => <></>,
};

export default formComponentMapping;
