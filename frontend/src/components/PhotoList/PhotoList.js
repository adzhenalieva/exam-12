import React from 'react';
import {Card, CardBody, CardImg, CardText} from "reactstrap";

import {apiURL} from "../../constants";

const PhotoList = props => {
    return (
        <Card className="mb-5" onClick={props.click}>
            <CardBody>
                <CardImg top width="100%" className="mb-3" src={apiURL + '/uploads/photos/' + props.image} alt="photoGallery"/>
                <CardText><strong>
                   Title {props.title}
                </strong></CardText>
                <CardText>By: {props.user}</CardText>

            </CardBody>
        </Card>
    );
};

export default PhotoList;