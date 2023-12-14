import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const arrayCategories = ['Dragon Ball']
    const [categories, setCategories] = useState(arrayCategories)

    
    const onNewCategory = (newCategory) => {
        
        if (categories.includes(newCategory)){
            alert("¡La categoría ya existe!");
            return;
        } //No se permite agregar categorias repetidas

        setCategories([newCategory, ...categories])
        console.log(categories)
    }


    return (
    <>
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory onNewCategory = { onNewCategory } />    
    
       
        {
            categories.map( category => (
                <GifGrid 
                    key = { category }
                    category = { category }
                />
            ))
        }


    </>
  )
}
