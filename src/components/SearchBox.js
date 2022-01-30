import React, { useEffect, useState } from "react";

import GitData from "./GitData";
import axios from "axios";

const SearchBox = () => {
    const [input, setInput] = useState("");
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setRepo([]);
        setHasError(false);
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = async (e) => {
        setLoading(true);

        try {
            const result = await axios(
                `https://api.github.com/users/${input}/repos`
            );
            setRepo(result);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setHasError(true);
        }
    };

    const handleDelete = () => {
        setInput("");
    };

    return (
        <>
            {hasError === false ? (
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={handleChange}
                        onKeyPress={(e) => e.key === "Enter" && handleClick()}
                    />
                    <button onClick={handleClick} disabled={!input}>
                        {loading ? "Searching..." : "Search"}
                    </button>
                    <button onClick={handleDelete} disabled={!input}>
                        Clear
                    </button>
                    <GitData repo={repo} />
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick} disabled={!input}>
                        {loading ? "Searching..." : "Search"}
                    </button>
                    <button onClick={handleDelete} disabled={!input}>
                        Clear
                    </button>
                    <h2>Ooops.. Username Not Found</h2>
                </div>
            )}
        </>
    );
};

export default SearchBox;
