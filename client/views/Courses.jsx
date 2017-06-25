import React from 'react';
import { Table, Checkbox, Image, Col, Nav, NavItem, NavDropdown, MenuItem, Button, Navbar } from 'react-bootstrap';
import Navigation from './Navigation';

export default class Courses extends React.Component {
    render() {
        return (
            <div>
              <Navigation/>
              <Col sm={2}>
                <Navbar fluid className='filter-sidebar'>
                <Navbar.Collapse>
                  <Nav bsStyle="pills" stacked>
                    <NavDropdown title='Topic' className='criteria'>
                      <MenuItem>Math</MenuItem>
                      <MenuItem>Biology</MenuItem>
                      <MenuItem>Chemistry</MenuItem>
                    </NavDropdown>
                    <NavDropdown title='Popularity' className='criteria'>
                      <MenuItem>Increasing</MenuItem>
                      <MenuItem>Decreasing</MenuItem>
                    </NavDropdown>
                    <NavDropdown title='Date' className='criteria'>
                      <MenuItem>Newest</MenuItem>
                      <MenuItem>Oldest</MenuItem>
                    </NavDropdown>
                  </Nav>
                  </Navbar.Collapse>
                  </Navbar>
              </Col>

              <Col sm = {10} className='course'>
                <Col sm = {3} className='image-placeholder'></Col>
                <Col sm = {8} className='course-description'>
                  <h3 className='course-name'>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Aliquam elit erat, sollicitudin ac tristique vitae, iaculis
                   ac felis. Sed in vulputate tellus. Nullam mattis egestas
                   elementum. Etiam turpis leo, pharetra sed porttitor sed,
                   lobortis et dui. Nam non egestas leo. Mauris bibendum
                   sagittis volutpat. Vivamus fermentum libero vitae neque
                   luctus pulvinar. Aliquam erat volutpat. Cras nulla quam,
                   aliquam eget erat non, luctus mattis diam.</p>
                   <Button bsStyle='warning' className='butt'>Learn more</Button>
                   <Button bsStyle='warning' className='butt'>Subscribe</Button>
                </Col>
              </Col>
              <Col sm = {10} className='course'>
                <Col sm = {3} className='image-placeholder'></Col>
                <Col sm = {8} className='course-description'>
                  <h3 className='course-name'>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Aliquam elit erat, sollicitudin ac tristique vitae, iaculis
                   ac felis. Sed in vulputate tellus. Nullam mattis egestas
                   elementum. Etiam turpis leo, pharetra sed porttitor sed,
                   lobortis et dui. Nam non egestas leo. Mauris bibendum
                   sagittis volutpat. Vivamus fermentum libero vitae neque
                   luctus pulvinar. Aliquam erat volutpat. Cras nulla quam,
                   aliquam eget erat non, luctus mattis diam.</p>
                   <Button bsStyle='warning' className='butt'>Learn more</Button>
                   <Button bsStyle='warning' className='butt'>Subscribe</Button>
                </Col>
              </Col>

            </div>
        );
    }
};
