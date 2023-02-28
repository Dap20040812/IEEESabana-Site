import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <Left>
            <Logo> Rama Estudiantil IEEE Unisabana </Logo>
            <Description> 
            
            </Description>
            <SocialContainer>
                <SocialIcon color='#e4405f'>
                    <a href='https://www.instagram.com/rama_estudiantil_unisabana/'><Instagram/></a>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <Room style={{marginRight:'10px'}} />
                Km. 7, Autopista Norte de Bogotá. Chía, Cundinamarca
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}} />
                +57 320 9728244
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:'10px'}} />
                nataliamapr@ieee.org
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div `
    color: white;
    height: 100%;
    background: linear-gradient(153deg, rgba(0,0,0,1) 0%, rgba(57,52,52,1) 100%, rgba(251,251,251,1) 100%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 3vh;
    overflow-x: hidden;
    bottom: 0;
    left: 0;
    right: 0;
`

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
`

const Center = styled.div `
    flex: 1;
    padding: 20px;
`

const Right = styled.div `
    flex: 1;
    padding: 20px;
    width: 100vh;

`

const Logo = styled.h1 `

`

const Description = styled.p `
    margin: 20px 0;
`

const SocialContainer = styled.div `
    display: flex;
    justify-content: center;
`

const SocialIcon = styled.div `
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    a{
        text-decoration: none;
        color: white;
    }
`

const Title = styled.h3 `
    margin-bottom: 30px;
`

const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`