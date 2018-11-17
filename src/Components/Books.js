import React, { Component } from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, PanelGroup, Panel, Accordion, Button} from 'react-bootstrap';
class Books extends Component {
  render() {
    let bookItems;

    if(this.props.books){
      bookItems = this.props.books.map(book=>{
        let id = book.id;
        let title = book.volumeInfo.title;
        //let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;
        return (
          <PanelGroup accordion id={id}>
  <Panel eventKey={id}>
    <Panel.Heading>
      <Panel.Title toggle>{title}</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    <Grid>
    <Row>
    <Col xs={3} md={3} lg={3}>
  
    </Col>
    <Col xs={8} md={3} lg={8}>
    <ListGroup>
    <ListGroupItem >Category : <strong>{categories}</strong></ListGroupItem>
    <ListGroupItem >Author : <strong>{authors}</strong></ListGroupItem>
    <ListGroupItem >Publisher : <strong>{publisher}</strong></ListGroupItem>
    <ListGroupItem >Page Count : <strong>{pageCount}</strong></ListGroupItem>
    <ListGroupItem >Publish Date : <strong>{publishedDate}</strong></ListGroupItem>
    <ListGroupItem >Average Rating : <span className = "rating"><strong>{averageRating}</strong></span></ListGroupItem>
  </ListGroup>
    </Col>
    </Row>
      <Row>
        <Col xs={11} md={11} lg={11}>
        <h3>Book Description</h3>
        {description}
        <hr />
        <Button href = {buyLink} bsStyle = "primary" >Buy Book</Button>
        </Col>
      </Row>
    </Grid>

    </Panel.Body>
  </Panel>

</PanelGroup>

        )

      });
    }
    return (
    <div>
    <Accordion>
 {bookItems}
    </Accordion>
    </div>
    );
  }
}

export default Books;
