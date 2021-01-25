import React from 'react'
import Card from './Card'
import team from '../images/team.svg';
import shop from '../images/shop.svg';

const CardFooter = () => {
    return (
        <div className="card-footer">
            <img src={team} alt="" className="team-img" />
            <select className="count">
                <option value="1-2">1-2 чел</option>
            </select>
            <input type="image" alt="Shop" src={shop} className="team-input" onClick={() => void 0} />
        </div>
    )
}

const ShopCard = (props) => {
    const { item } = props;
    return (
        <div className="shop-card-container">
            <Card item={item} />
            <CardFooter />
        </div>
    )
}

export default ShopCard;
