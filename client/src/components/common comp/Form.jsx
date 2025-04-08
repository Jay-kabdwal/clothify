import React from 'react'
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

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
                        onChange={event => setFormData({
                            ...formData,
                            [getControlItem.name]: event.target.value
                        })}
                    />
                );
                break;

            case "select":
                element = (
                    <Select
                        value={value}
                        onValueChange={(value) => {
                            setFormData({
                                ...formData,
                                [getControlItem.name]: value
                            })
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={getControlItem.placeholder || `Select ${getControlItem.label}`} />
                        </SelectTrigger>
                        <SelectContent>
                            {getControlItem.options?.map((option) => (
                                <SelectItem key={option.id} value={option.id}>
                                    {option.label}
                                </SelectItem>
                            ))}
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
                        onChange={event => setFormData({
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
                        onChange={event => setFormData({
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
                {formControls.map(controlItem => (
                    <div className='grid w-full gap-1.5' key={controlItem.name}>
                        <label className='mb-1'>{controlItem.label}</label>
                        {renderInputsByComponentType(controlItem)}
                    </div>
                ))}
            </div>
            <Button type="submit" className="mt-2 w-full">
                {buttonText || "Submit"}
            </Button>
        </form>
    )
}

export default CommonForm