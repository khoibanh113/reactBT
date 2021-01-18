import React from 'react';
import defaultAvatar from '../img/avatar.jpg'
import './Infor.css'
import optionImg from '../img/Option.jpg'
import mainImg from '../img/mainImg.jpg'
import heartImg from '../img/Heart.jpg'
import commentImg from '../img/Comment.jpg'
import messageImg from '../img/Message.jpg'
import slideImg from '../img/Slide.jpg'
import slidedImg from '../img/Slided.jpg'
import saveImg from '../img/Save.jpg'
class infor extends React.Component {
    render(){
        return (
            <div className="containerAll">
                <div className="header">
                    <img className="avatarImg" src={defaultAvatar} alt="defaultAvt"/>
                    <div className="Name">
                        <div className="userName">username</div>
                        <div className="plaoehere">Placehere</div>
                    </div>
                    <img className= "optionImg" src={optionImg} alt="optionImg" />
                    
                </div>
                <div className="mainImg">
                    <img src = {mainImg} alt="mainImg" />    
                </div>
                <div className="underImg">
                    <img src={heartImg} alt="heartImg" />
                    <img src={commentImg} alt="commentImg" />
                    <img src={messageImg} alt="messageImg" />
                    <img src={slideImg} alt="slideImg" />
                    <img src={slidedImg} alt="slidedImg" />
                    <img src={saveImg} alt="saveImg" />
                </div>


            </div>
        );
    }
}


export default infor;
