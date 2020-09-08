import React from "react";
import styled from "styled-components";
import axios from "axios";
import { saveAs } from "file-saver";

const Button = styled.button`
    margin: 3px;
`;

export default function Link({ filename }) {
    const handleDownload = () => {
        axios
            .get(`/download/${filename}`, { responseType: "blob" })
            .then((response) => {
                console.log(
                    `downloaded ${filename}: ${response.status} ${response.statusText}, ${response.headers["content-type"]}, ${response.data.size} bytes`
                );
                saveAs(response.data, filename);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <Button type="button" onClick={handleDownload}>
                {filename}
            </Button>
        </div>
    );
}
