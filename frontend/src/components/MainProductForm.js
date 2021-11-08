import React from 'react';
import styled from 'styled-components';

const MainProductFormStyle = styled.div`
    .productform_main{
        margin: 5vh 5vw;
    }
    .productform_main_product > img{
        width: 25vw;
        border: 2px solid gray;
        padding: 2vh 2vw;
    }
    .productform_main_product{
        display: inline-block;
        padding: 0 1.5vw;
    }
`
const MainProductForm = (props) => {
    const items = [0, 1, 2];
    const itemList = items.map((item, index) => (<div key={index} className="productform_main_product"><img src="img/testimg.png" alt="productImg"/><h3>{props.name}</h3></div>));
    return(
        <div>
            <MainProductFormStyle>
                <div className="productform_main">
                    <div className="productform_main_title">
                        <h1>{props.type}</h1>
                    </div>
                    {itemList}
                </div>
            </MainProductFormStyle>         
        </div>
    )
}

export default MainProductForm;