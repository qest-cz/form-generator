/// <reference types="react" />
import { RenderReadyFormField } from './types';
export declare const formComponentMapping: {
    autocomplete: (params: RenderReadyFormField) => JSX.Element;
    button: (params: any) => JSX.Element;
    cascader: (params: any) => JSX.Element;
    checkbox: (params: RenderReadyFormField) => JSX.Element;
    datePicker: (params: RenderReadyFormField) => JSX.Element;
    input: (params: RenderReadyFormField) => JSX.Element;
    inputNumber: (params: RenderReadyFormField) => JSX.Element;
    mention: (params: RenderReadyFormField) => JSX.Element;
    radio: (params: any) => JSX.Element;
    rate: (params: RenderReadyFormField) => JSX.Element;
    select: (params: any) => JSX.Element;
    slider: (params: RenderReadyFormField) => JSX.Element;
    switch: (params: RenderReadyFormField) => JSX.Element;
    timePicker: (params: RenderReadyFormField) => JSX.Element;
    transfer: (params: any) => JSX.Element;
    treeSelect: (params: any) => JSX.Element;
};
