import { List, Typography } from "antd";

import React from "react";

const { Link } = Typography;

const GitData = (props) => {
    const { repo } = props;

    const repoList =
        repo.length !== 0 ? (
            repo.data.map((item) => (
                <List key={item.id} size="large">
                    <Link href={item.html_url} target="_blank">
                        {item.name}
                    </Link>
                </List>
            ))
        ) : (
            <div></div>
        );
    return <div>{repoList}</div>;
};

export default GitData;
