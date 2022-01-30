import React, { useState } from "react";

import axios from "axios";

const SearchBox = () => {
    const [input, setInput] = useState("");
    const [repo, setRepo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
    };

    const handleClick = async () => {
        console.log(input);
        try {
            const result = await axios(`https://api.github.com/users/${input}`);
            setRepo(result);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(repo);
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchBox;
