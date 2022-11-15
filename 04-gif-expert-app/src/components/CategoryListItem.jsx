import React from 'react';
import { useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export const CategoryListItem = ({ category }) => {

    useEffect(() => {
        getGifs(category);
    }, []);

    return <p>{category}</p>;
}