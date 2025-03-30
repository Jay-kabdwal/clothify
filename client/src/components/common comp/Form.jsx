import React from 'react'
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { SelectContent, SelectTrigger, SelectItem,SelectValue } from '@radix-ui/react-select';
import { Button } from '../ui/button';

const Form = ({ formControls, formData, SetFormData, onSubmit, buttonText }) => {


    function renderInputsByComponentType(getControlItem) {

        let element = null;
        const value = formData[getControlItem.name] || "";

        switch (getControlItem.componentType) {
            case "input":
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange ={event =>SetFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;

            case "slect":
                element = (
                    <Select value={value} onValueChange ={(value) => SetFormData({
                        ...formData,
                        [getControlItem.name]: value
                    })}>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder={getControlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options &&
                                    getControlItem.options.length > 0 ?
                                    getControlItem.options.map(
                                        optionItem => <SelectItem
                                            key={optionItem.id}
                                            value={optionItem.id}>
                                            {optionItem.label}
                                        </SelectItem>) : null}
                        </SelectContent>
                    </Select>
                );
                break;

            case "textarea":
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={event => SetFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;

            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={event => SetFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;
        }
        return element;

    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map(ControlItem => <div className='grid w-full gap-1.5' key={ControlItem.name}>
                        <label className='mb-1'>{ControlItem.label}</label>

                        {
                            renderInputsByComponentType(ControlItem)
                        }
                    </div>
                    )
                }

            </div>
            <Button type="submit" className="mt-2 w-full">{buttonText || "submit"}</Button>
        </form>
    )
}

export default Form