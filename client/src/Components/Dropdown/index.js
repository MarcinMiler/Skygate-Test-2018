import React from 'react'
import { Select, Option, Label } from './style'

const Dropdown = ({ name, options, onChange, value }) => (
    <div>
        <Label>{name}</Label>

        <Select onChange={e => onChange(e.target.value)} value={value}>
            {options.map((option, i) => <Option key={i}>{option}</Option>)}
        </Select>
    </div>
)

export default Dropdown
