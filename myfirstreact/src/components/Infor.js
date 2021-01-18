import React from 'react';
import defaultAvatar from '../img/avatar.jpg';
import commentImg from '../img/Comment.jpg';
import heartImg from '../img/Heart.jpg';
import unHeartImg from '../img/unHeart.jpg'
import mainImg from '../img/mainImg.jpg';
import messageImg from '../img/Message.jpg';
import optionImg from '../img/Option.jpg';
import saveImg from '../img/Save.jpg';
import slideImg from '../img/Slide.jpg';
import slidedImg from '../img/Slided.jpg';
import './Infor.css';
class infor extends React.Component {
    constructor(prop){
        super(prop);

        this.state ={
            isLike:false
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState(){
        this.setState({
            isLike:!this.state.isLike
        })
    }
    render(){
        var srcHeart = this.state.isLike?heartImg:unHeartImg;
        return (
            <div className="containerAll">
                <div className="header">
                    <img className="avatarImg" src={defaultAvatar} alt="defaultAvt"/>
                    <div className="Name">
                        <div className="userName">username</div>
                        <div className="placehere">Placehere</div>
                    </div>
                    <img className= "optionImg" src={optionImg} alt="optionImg" />
                    
                </div>
                <div className="mainImg">
                    <img src = {mainImg} alt="mainImg" />    
                </div>
                <div className="underImg">
                    <img onClick={this.changeState} src={srcHeart} alt="heartImg" />
                    <img src={commentImg} alt="commentImg" />
                    <img src={messageImg} alt="messageImg" />
                    <div className="slide">
                        <img src={slideImg} alt="slideImg" />
                        <img src={slidedImg} alt="slidedImg" />
                    </div>
                    <img src={saveImg} alt="saveImg" />
                </div>

                <div className="view">10.235 views</div>

                <div className="userStatus">
                    userName instagram template 
                    <a href="/">#template</a>
                </div>

                <div className="comment">View all 10.328 comments</div>

                <div className="time">5 DAYS AGO</div>


            </div>
        );
    }
}


export default infor;
