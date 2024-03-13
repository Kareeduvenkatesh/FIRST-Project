import {React} from 'react'
import { mensWear } from '../../staticData'
import './collection.css'

export const Collection = () =>{
    return(
        <div>
            <h1>
                 Men's Wear
            </h1>
            <div>
                {mensWear.map((eachItem) => {
                    return(
                        <img src= {eachItem.imgUrl} alt={eachItem.id} className='mens-wear-image'/>
                    )
                })}
            </div>
        </div>
    )
}