import React from 'react'
import { Select, Option, Label } from './style'

const Dropdown = ({ name, options, onChange }) => (
    <div>
        <Label>{name}</Label>

        <Select onChange={e => onChange(e.target.value)}>
            {options.map((option, i) => <Option key={i}>{option}</Option>)}
        </Select>
    </div>
)

export default Dropdown
