import React from 'react';
import {Card, CardBody, CardImg, CardText} from "reactstrap";

import {apiURL} from "../../constants";

const PhotoList = props => {
    return (
        <Card className="mb-5" >
            <CardBody>
                <CardImg onClick={props.click} top width="100%" className="mb-3" src={apiURL + '/uploads/photos/' + props.image} alt="photoGallery"/>
                <CardText><strong>
                   Title {props.title}
                </strong></CardText>
                <CardText style = {{color: "blue", textDecoration: "underline"}} onClick={props.clickAuthor}>{props.user}</CardText>
            </CardBody>
            {props.children}
        </Card>
    );
};

export default PhotoList;