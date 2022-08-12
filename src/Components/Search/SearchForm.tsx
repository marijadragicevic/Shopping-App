import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { Context } from '../../Context/Context';

const SearchForm: React.FC = () => {
    const [name, setName] = useState<string>("");

    const { getData } = useContext(Context);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        getData(name);
        setName("");
    }

    return (
        <form className='form' id='form' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' className='form__input' minLength={3} value={name} required onChange={(e) => setName(e.target.value)} placeholder='Enter the name of dish...' />
            <i className='form__icon'><AiOutlineSearch /></i>
        </form>
    )
}

export default SearchForm;