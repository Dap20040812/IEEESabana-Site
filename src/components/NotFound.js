import React from 'react'
import styled from 'styled-components'

function NotFound() {
    
  return (
    <Container>
        <Error src='https://cdn-icons-png.flaticon.com/512/284/284270.png'/>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding: 2em;
`

const Error = styled.img`
  width: 50vw;
`