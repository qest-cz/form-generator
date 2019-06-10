import {
    AutoComplete,
    Cascader,
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Mention,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
} from '@jbuschke/formik-antd';
import Button from 'antd/lib/button';
import React from 'react';

import { RenderReadyFormField } from './types';

export const formComponentMapping = {
    autocomplete: (params: RenderReadyFormField) => <AutoComplete {...params} />,
    button: (params: any) => <Button {...params} />,
    cascader: (params: any) => <Cascader {...params} />,
    checkbox: (params: RenderReadyFormField) => <Checkbox {...params} />,
    datePicker: (params: RenderReadyFormField) => <DatePicker {...params} />,
    input: (params: RenderReadyFormField) => <Input {...params} />,
    inputNumber: (params: RenderReadyFormField) => <InputNumber {...params} />,
    mention: (params: RenderReadyFormField) => <Mention {...params} />,
    radio: (params: any) => <Radio {...params} />,
    rate: (params: RenderReadyFormField) => <Rate {...params} />,
    select: (params: any) => <Select {...params} />,
    slider: (params: RenderReadyFormField) => <Slider {...params} />,
    switch: (params: RenderReadyFormField) => <Switch {...params} />,
    timePicker: (params: RenderReadyFormField) => <TimePicker {...params} />,
    transfer: (params: any) => <Transfer {...params} />,
    treeSelect: (params: any) => <TreeSelect {...params} />,
};
