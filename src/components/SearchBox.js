import React, { useState } from "react";

import GitData from "./GitData";
import axios from "axios";

const SearchBox = () => {
    const [input, setInput] = useState("");
    const [repo, setRepo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
    };

    const handleClick = async (e) => {
        // console.log(input);
        e.preventDefault();
        try {
            const result = await axios(
                `https://api.github.com/users/${input}/repos`
            );
            setRepo(result);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(repo);
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Search</button>
            </div>
            <GitData repo={repo} />
        </>
    );
};

export default SearchBox;
