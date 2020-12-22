import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

   
   const [category, setCategory] = useState(['cats']);



    return (
      <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategory={setCategory} />


        <hr />
        
        <ol>
            {
                category.map(categories =>(
                     <GifGrid 
                     key={categories}
                     category={categories}
                     />
                ))
            }
        </ol>
      </>
  
    )
  }