import { Input, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";

import GitData from "./GitData";
import axios from "axios";

const { Search } = Input;

const { Title, Text } = Typography;

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

    const handleClick = async () => {
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

    return (
        <>
            {hasError === false ? (
                <div>
                    <Space direction="vertical">
                        <Search
                            placeholder="Type GitHub Username.."
                            value={input}
                            onChange={handleChange}
                            enterButton={loading ? "Searching..." : "Search"}
                            onSearch={handleClick}
                            allowClear
                            size="large"
                        />
                    </Space>
                    <br /> <br />
                    <GitData repo={repo} />
                </div>
            ) : (
                <div>
                    <Space direction="vertical">
                        <Search
                            placeholder="Type GitHub Username.."
                            value={input}
                            onChange={handleChange}
                            enterButton={loading ? "Searching..." : "Search"}
                            allowClear
                            size="large"
                        />
                    </Space>
                    <br /> <br />
                    <Title level={4}>
                        <Text type="danger">Username Does Not Exist</Text>
                    </Title>
                </div>
            )}
        </>
    );
};

export default SearchBox;
