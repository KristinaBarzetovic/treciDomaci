

import React, { useContext, useState } from 'react'

const FormContext = React.createContext({})

export const useFormContext = () => useContext(FormContext);

export default function Form({ onSubmit, children }) {
    const [formState, setFormState] = useState({});
    return (
        <FormContext.Provider
            value={{
                formState,
                onChange: (name, value) => {
                    setFormState(prev => {
                        return {
                            ...prev,
                            [name]: value
                        }
                    })
                }
            }}
        >
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit(formState);
            }} >
                {children}
            </form>
        </FormContext.Provider>
    )
}

export function FormInput({ errors, label, name }) {
    const { formState, onChange } = useFormContext();
    return (
        <div className='form-group'>
            <label >{label}</label>
            <input type="text" className={`form-control ${errors?.length > 0 ? 'is-invalid' : ''}`} value={formState[name] || ''} onChange={e => {
                onChange(name, e.currentTarget.value);
            }} />
            {
                errors?.length > 0 && errors.map(error => {
                    return (
                        <div className='invalid-feedback'>
                            {error}
                        </div>
                    )
                })
            }
        </div>
    )
}
export function FormSelect({ errors, label, name, options }) {
    const { formState, onChange } = useFormContext();
    return (
        <div className='form-group'>
            <label >{label}</label>
            <select type="text" className={`form-control ${errors?.length > 0 ? 'is-invalid' : ''}`} value={formState[name] || ''} onChange={e => {
                onChange(name, e.currentTarget.value);
            }}>
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )
                    })
                }
            </select>
            {
                errors?.length > 0 && errors.map(error => {
                    return (
                        <div className='invalid-feedback'>
                            {error}
                        </div>
                    )
                })
            }
        </div>
    )
}
Form.Input = FormInput;
Form.Select = FormSelect;