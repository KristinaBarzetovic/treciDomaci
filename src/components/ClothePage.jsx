import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context'
import ClotheCard from './ClotheCard';

export default function ClothePage() {
    const [clothes, setClothes] = useState([])
    const { user } = useUserContext();


    useEffect(() => {
        axios.get('/clothes').then(res => {
            setClothes(res.data);
        })
    }, [])

    return (
        <div className='container mt-3'>
            <h2>Clothes</h2>
            <div className='d-flex justify-content-between flex-wrap'>
                {
                    clothes.map(clothe => {
                        return (
                            <ClotheCard
                                key={clothe.id}
                                clothe={clothe}
                                onDelete={user ? async () => {
                                    await axios.delete('/clothes/' + clothe.id, {
                                        headers: {
                                            authorization: `Bearer ${user.token}`
                                        }
                                    });
                                    setClothes(prev => {
                                        return prev.filter(cl => cl !== clothe)
                                    })
                                } : undefined} />
                        )
                    })
                }
            </div>
        </div>
    )
}
