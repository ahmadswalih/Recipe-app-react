import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import React from 'react'
import { List, Slink } from '../StyledComponents'

const Category = () => {
  return (
    <List>
        <Slink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={"/cuisine/Chinese"}>
            <GiChopsticks/>
            <h4>Chinese</h4>
        </Slink>
    </List>
  )
}

export default Category