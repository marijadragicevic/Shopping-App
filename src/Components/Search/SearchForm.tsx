import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
    getData: (name: string) => Promise<void>
}

const SearchForm: React.FC<Props> = ({ getData }) => {
    const [name, setName] = useState<string>("");

    return (
        <form onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            getData(name);
            setName("");
        }}>
            <input type='text' minLength={3} value={name} required onChange={(e) => setName(e.target.value)} />
            <AiOutlineSearch />
        </form>
    )
}

export default SearchForm;