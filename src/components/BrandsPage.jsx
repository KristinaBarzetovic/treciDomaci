import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function BrandsPage() {
    const [brands, setBrands] = useState([])


    useEffect(() => {
        axios.get('/brands').then(res => {
            setBrands(res.data);
        })
    }, [])
    return (
        <div className='container mt-3'>
            <h2>Brands</h2>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Legal name</th>
                        <th>Email</th>
                        <th>Headquarters</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        brands.map(brand => {
                            return (
                                <tr key={brand.id}>
                                    <td>{brand.id}</td>
                                    <td>{brand.name}</td>
                                    <td>{brand.legalName}</td>
                                    <td>{brand.email}</td>
                                    <td>{brand.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
