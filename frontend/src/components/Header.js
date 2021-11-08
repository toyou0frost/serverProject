import react from "react";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom"

const HeaderStyle = styled.div`
    .header_main{
        display: flex;
        flex-direction: row; 
        border-bottom: 1px solid gray;
    }
    .header_main_left, .header_main_center, .header_main_right{
        flex: 1;
    }
    .header_main_left > ul, .header_main_right > ul{
        display: flex;
        flex-direction: row;
    }
    .header_main_left > ul > li{
        margin: 0 1.5vw;
    }
    .header_main_right > ul > li{
        margin: 0 1vw;
    }
    ul{
       list-style: none; 
    }
    a{
        text-decoration: none;
        color: black;
    }
    .header_main_right_search{
        display: flex;
    }
`

const Header = () => {
    return(
        <div>
            <BrowserRouter>
            <HeaderStyle>
                <div className="header_main">
                    <div className="header_main_left">
                        <ul>
                            <li><Link to="/"><img src="" alt="logo"/></Link></li>
                            <li><Link to="/tag">TAG</Link></li>
                            <li><Link to="/hot">HOT</Link></li>
                        </ul>
                    </div>
                    <div className="header_main_center">

                    </div>
                    <div className="header_main_right">
                        <ul>
                            <li>
                                <div className="header_main_right_search">
                                    <input type="text"/>
                                    <input type="button" value="검색"/>
                                </div>
                            </li>
                            <li></li>
                            <li><Link to="/login">로그인</Link></li>
                        </ul>
                    </div>
                </div>
            </HeaderStyle>        
            </BrowserRouter>
        </div>
    )
}

export default Header;