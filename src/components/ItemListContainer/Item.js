import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Item.css';

export const Item = ( {id, img, name, desc, price} ) => {
    return (
            <Card className="card">
                <Card.Img src={img} alt={name} className="card-img"/>
                <Card.Body>
                    <Card.Title className="card-name">{name}</Card.Title>
                    <Card.Text className="card-desc">{desc}</Card.Text>
                    <Card.Text className="card-price">{price} €</Card.Text>
                    <Link to={`/detail/${id}`} className="card-btn">Book Now</Link>
                </Card.Body>
            </Card>
    )
};