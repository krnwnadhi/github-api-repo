import { Divider, List } from "antd";
import { Space, Typography } from "antd";

import React from "react";

const { Link } = Typography;

const GitData = (props) => {
    const { repo } = props;

    const repoList =
        repo.length !== 0 ? (
            repo.data.map((item) => (
                // <Space direction="horizontal" key={item.id}>
                //     <Link
                //         href={item.html_url}
                //         target="_blank"
                //         style={{ textDecoration: "none" }}
                //     >
                //         {item.name}
                //     </Link>
                // </Space>
                <List
                    size="large"
                    // bordered
                    // renderItem={(item) => <List.Item></List.Item>}
                >
                    <Link
                        href={item.html_url}
                        target="_blank"
                        // style={{ textDecoration: "none" }}
                    >
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
