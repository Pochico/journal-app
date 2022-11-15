import React from 'react'
import { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['World', 'Hello' ]);

    const onAddCategory = (newCategory) => {

        if (newCategory !== '') {
            categories.includes(newCategory) 
                ? console.warn('This category already exists') 
                : setCategories([newCategory, ...categories]);

            return newCategory;
        } else {
            console.warn('The input field is empty.');
        }
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <div className="categories">

                <AddCategory onNewCategory={onAddCategory} />

                <div className='categories-grid'>
                    {categories.map(
                        category => <GifGrid  key={category} category={category} />
                    )}
                </div>
            </div>
        </>
    )
}


