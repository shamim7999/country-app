import React from 'react'
import {v4 as uuidv4} from 'uuid';
import Country from './Country';
import '../css/countries.css';


const Countries = (props) => {
  return (
    <section className='countries'>
        { props.countries.map((country) => {
            const newCountry = {id: uuidv4(), country};
            return <Country handleRemove = {props.handleRemove} key={newCountry.id} {...newCountry} />
        }) }
    </section>
  )
}

export default Countries