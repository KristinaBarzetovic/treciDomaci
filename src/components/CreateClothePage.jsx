import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context'
import Form from './Form';

export default function CreateClothePage() {
    const { user } = useUserContext();
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([])
    const [errors, setErrors] = useState({})
    const [success, setsuccess] = useState(false)
    useEffect(() => {
        axios.get('/brands').then(res => { setBrands(res.data) });
        axios.get('/categories').then(res => { setCategories(res.data) });
    }, [])

    return (
        <div className='container mt-3'>
            <h2>Create new clothe</h2>
            {
                success && (
                    <h3>Successfully created new clothe</h3>
                )
            }
            <Form onSubmit={async data => {
                try {
                    await axios.post('/clothes', data, {
                        headers: {
                            authorization: `Bearer ${user.token}`
                        }
                    })
                    setErrors({});
                    setsuccess(true);
                } catch (err) {
                    if (axios.isAxiosError(err)) {
                        setErrors(err.response.data);
                    }
                    setsuccess(false);
                }
            }}>
                <Form.Input errors={errors.title} label='Title' name='title' required />
                <Form.Input errors={errors.color} label='Color' name='color' required />
                <Form.Input errors={errors.url} label='Image URL' name='url' required />
                <Form.Select
                    errors={errors.brand_id}
                    label='Brand'
                    name='brand_id'
                    options={brands.map(brand => {
                        return {
                            value: brand.id,
                            label: brand.name
                        }
                    })}
                />
                <Form.Select
                    errors={errors.clothe_category_id}
                    label='Category'
                    name='clothe_category_id'
                    options={categories.map(category => {
                        return {
                            value: category.id,
                            label: category.name
                        }
                    })}
                />
                <Form.Input errors={errors.description} textArea label='Description' name='description' required />
                <button className='btn btn-primary mt-4 form-control' type='submit'>Create</button>
            </Form>
        </div>
    )
}
