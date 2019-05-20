import React from "react";
import {
    Card, CardHeader, CardBody, CardFooter,
    Container
} from 'reactstrap';

export default ({ id, item }) => {
    const html = item.lyrics;
    return (
        <Container className="col-sm-8">
            <Card key={id}>
                <CardHeader
                    style={{fontSize: "30px"}}
                >
                    {item.title}
                </CardHeader>
                <CardBody
                    style={{fontSize: "20px"}}
                >
                    <div dangerouslySetInnerHTML={{__html: html}} />
                </CardBody>
                <CardFooter
                    className="text-right"
                    style={{fontSize: "10px"}}
                >
                    Created at {item.date}
                </CardFooter>
            </Card>
        </Container>
    );
};