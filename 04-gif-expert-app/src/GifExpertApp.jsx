import { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const arrayCategories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(arrayCategories)
 
    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }
    

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory onNewCategory = { onAddCategory } />    
    
        {/* Listado categorias */}        

        <ol>
            {
                categories.map(category  => {
                    return <li key={category}> {category} </li>
                })
            }
        </ol>

    </>
  )
}
