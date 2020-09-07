import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import cover from '../assets/cover.jpg';
import  { Button } from 'react-bootstrap';

const Styles = styled.div`
  .jumbo {
    background: url(${cover}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 285px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h2>Change your career. Change your life.</h2>
                <h6>Only pay tuition once you're hired as a software engineer.</h6>
                 <Button type="button" class="btn btn-info btn-lg">APPLY NOW</Button>
            </Container>
        </Jumbo>
    </Styles>

)
