import React from 'react'
import { HotProductsData } from '../../utils/Items'
import UserItems from './UserItems'


const HotProducts = () => {
    return (
        <div>
            <UserItems data={HotProductsData} title="Hot Products"/>
        </div>
    )
}

export default HotProducts