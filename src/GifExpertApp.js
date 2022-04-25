import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

   
    const [categories, setCategories] = useState([])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Fullmetal'])
    //     setCategories(cates => [...cates, 'Fullmetal'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />
            

            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid 
                                    category={category}
                                    key= {category}/>
                    })
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {}

export default GifExpertApp