import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import '../../Style/Components/SearchForm.scss';

// type of props
type Props = {
    getData: (name: string) => Promise<void>,
}

const SearchForm: React.FC<Props> = ({ getData }) => {

    const [name, setName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        getData(name);
        setName("");
    }

    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <input type='text' className='form__input' minLength={3} value={name} required onChange={(e) => setName(e.target.value)} placeholder='Enter the name of dish...' />
            <i className='form__icon'><AiOutlineSearch /></i>
        </form>
    )
}

export default SearchForm;