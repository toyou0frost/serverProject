import React from 'react';
import styled from 'styled-components';
import MainProductForm from './MainProductForm';

const MainStyle = styled.div`
    .main_top{
        display: flex;
        margin: 5vh 5vw;
    }
    .main_top > input[type=button]{
        flex: 1;
    }
    .main_top_img{
        display: flex;
        flex: 3;
    }
    .main_top_img > img{
        border: 1px solid gray;
    }
`

const Main = () => {
    return(
        <div>
            <MainStyle>    
                <div className="main">
                    <div className="main_top">
                        <input type="button" value="left"/>
                        <div className="main_top_img">
                            <img src="https://orange.contentsfeed.com/RealMedia/ads/Creatives/danawa/kone_phone_2101_109890/kone_phone_800142_211029.jpg" alt="main_top_img"/>
                        </div>
                        <input type="button" value="right"/>
                    </div>
                    <div className="main_center">
                        <MainProductForm type="전자제품" name="g103"/>
                    </div>
                </div>
            </MainStyle>  
        </div>
    )
}

export default Main;