import React from "react";
import styled from "styled-components";

const Button = styled.button`
    margin: 3px;
`;

export default function Link({ filename }) {
    return (
        <div>
            <Button type="button">{filename}</Button>
        </div>
    );
}
