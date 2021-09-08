import styled from 'styled-components'

const styledImage = styled.img`
    width: 100%;
    object-fit: contain;
    max-height: 50vh;
    padding: 0.75em;
    border: 0.5px solid #ddd;
    border-radius: 0.25em;
`

export default {
    img: styledImage,
}
