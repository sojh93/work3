import styled from "styled-components";
import React from "react";


const Image = (props) => {
    const {shape, src, size} = props; 

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle") {
        return (
            <ImageCircle {...styles}>

            </ImageCircle>
        )
    }

    if(shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles}>

                </AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>


        </React.Fragment>

    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://firebasestorage.googleapis.com/v0/b/sparta-megazine.appspot.com/o/images%2FLyeXJ0Jc7DUXC41XgbOfWsG89d92_1644232036321?alt=media&token=474d12bf-b7fc-43e4-9464-f0a98a001c64",
    size: 36, 
}

const AspectOutter = styled.div`
    width: 100%,
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%; 
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;



export default Image;