import React from 'react';
const createAnimation=(animType)=>{
    let styleSheet = document.styleSheets[0];
    let animationName,keyframes;

    switch(animType){
        case 'container':
            animationName= `animation_c${Math.round(Math.random() * 1000)}`;
            keyframes=`@-webkit-keyframes ${animationName} {
                0% {
                    transform: translateY(0px);
                }
                100% {
                    transform: translateY(-204px);
                }
            }`;
            break;
        case 'yaxis':
            animationName= `animation_y${Math.round(Math.random() * 1000)}`;
            let randomNum = Math.random() > .5;
            let xdisplacement=(Math.random() * (1 - 0.6) + .6);
            xdisplacement=(randomNum ? 1 : -1)*((Math.round(xdisplacement*1000)/1000)+17);
            keyframes=`@-webkit-keyframes ${animationName} {
                0% {
                    animation-timing-function: ease-in-out;
                    transform: translateX(0px);
                }
                50% {
                    transform: translateX(${xdisplacement}px);
                }
                100% {
                    transform: translateX(0px);
                }
            }`;
            break;
        case 'xaxis':
            animationName= `animation_x${Math.round(Math.random() * 1000)}`;
            keyframes=`@-webkit-keyframes ${animationName} {
                0% {
                    transform: scale(0.375);
                }
                40% {
                    opacity: 1;
                    transform: scale(0.375);
                }
                100% {
                    opacity: 0;
                    transform: scale(0.1);
                }
            }`;
            break;
    }
    
 
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    return animationName;
}
const animationend=(props)=>{
    props.animationHasEnd(props.magicNum);
}
const getRightSpace=()=>{
    let maxWidth=getWindowDimensions()['width']+100;
    return Math.ceil(Math.random() * (maxWidth));
}
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}
const Emoji=props=>{
    let animationETA=((Math.random() * (7.5 - 5.5 + 1) ) + 5.5)+'s';
    let containerAnimationName=createAnimation('container'),
    yAxisAnimation=createAnimation('yaxis'),
    xAxisAnimation=createAnimation('xaxis'),
    commonStyle={
        animationIterationCount: 1,
    },axiscommonStyle={
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    containerStyle={
        ...commonStyle,
        right: getRightSpace(),
        bottom: '5px',
        animationName: containerAnimationName,
        animationDuration: animationETA,
    },
    yAxisStyle={
        ...commonStyle,
        ...axiscommonStyle,
        animationName: yAxisAnimation,
        animationDuration: '7.25s',
    },
    xAxisStyle={
        ...commonStyle,
        ...axiscommonStyle,
        transform: 'scale(0.375)',
        animationName: xAxisAnimation,
        animationDuration: animationETA,
    }

    return (
        <React.Fragment>
            <div className="animationcontainer" style={containerStyle} onAnimationEnd={()=>animationend(props)}>
                <div className="animationcontainer" style={yAxisStyle}>
                    <div className="animationcontainer" style={xAxisStyle}>
                        <img alt="like" src={`images/${props.emojiType}.png`}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Emoji;