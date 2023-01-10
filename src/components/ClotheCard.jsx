
import React from 'react'

export default function ClotheCard({ clothe, onDelete }) {
    return (
        <div className='p-4'>
            <div style={{
                maxWidth: '300px'
            }} className='border rounded'>
                <img width='300px' src={clothe.url} alt="No img" />

                <div style={{ fontSize: "18px" }} className='text-center p-3'>
                    {clothe.title}
                </div>
                <div className='text-center p-3'>
                    Brand: {clothe.brand.name}
                </div>
                <div className='text-center p-3'>
                    Categpry: {clothe.category.name}
                </div>
                <div className='text-center p-3'>
                    Color: {clothe.color}
                </div>
                <p className='p-3'>
                    {clothe.description}
                </p>
                {
                    onDelete && (
                        <div className='p-3'>
                            <button className='btn btn-danger form-control' onClick={onDelete}>Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
