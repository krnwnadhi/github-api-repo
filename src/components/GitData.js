import React from "react";

const GitData = (props) => {
    const { repo } = props;
    // console.log("List of Repository:", repo.data);

    const repoList =
        repo.length !== 0 ? (
            repo.data.map((item) => (
                <li style={{ listStyle: "decimal" }} key={item.id}>
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                        {item.name}
                    </a>
                </li>
            ))
        ) : (
            <div></div>
        );
    return <div>{repoList}</div>;
};

export default GitData;
