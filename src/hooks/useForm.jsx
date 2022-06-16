import { useState } from 'react'

function useForm(initialState) {

    const [formValues, setFormValues] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log({name, value});

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

  return ({formValues, handleInputChange})
}

export default useForm