import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{position:"absolute", bottom: "0", width:'100%'}}>
      <Card>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;