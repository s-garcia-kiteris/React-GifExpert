import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [catergories, setCatergories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if (catergories.includes(newCategory)) return;
        setCatergories([newCategory, ...catergories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {catergories.map(c =>
            (
                <GifGrid
                    key={c}
                    category={c}
                />
            )
            )}
        </>
    )
}
