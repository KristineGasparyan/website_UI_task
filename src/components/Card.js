import React from 'react'

const Card = (props) => {
    const { item: { title, price, src }, isIcons, index, length } = props;
    console.log('props', props)
    return (
        <>
            <div className='card-wrapper' onClick={() => void 0}>
                <img src={src} alt="" />
                <span className="card-title">{title}</span>
                {price && <span className="price">{price}</span>}
            </div>
            { isIcons && index < length - 1 && < hr width="1" size="200" />}
        </>
    );
}

export default Card;