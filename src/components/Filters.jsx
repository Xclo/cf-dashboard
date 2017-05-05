import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock } from 'reactstrap';
 import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Filter = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Filters&w=318&h=90" alt="Filters" />
        <CardBlock>
          <CardTitle>Foundations</CardTitle>
          <div>
            <InputGroup>
              <InputGroupAddon>Search</InputGroupAddon>
              <Input placeholder="..." />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
              </InputGroupAddon>
              <Input placeholder="Check it out" />
            </InputGroup>
            <br />
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupAddon>@example.com</InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupAddon>$</InputGroupAddon>
              <Input placeholder="Dolla dolla billz yo!" />
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupAddon>$</InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <Input placeholder="Amount" type="number" step="1" />
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>
          <br />
          <div>
            <Button>Apply</Button>
          </div>
        </CardBlock>
      </Card>
    </CardDeck>
  );
};

export default Filter;
