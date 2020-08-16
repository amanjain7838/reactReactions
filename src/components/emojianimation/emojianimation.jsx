import React from 'react';
import Emoji from './emoji';


class Emojianim extends React.Component{
    constructor(props){
        super(props);
        this.state={children:[]};
    }
    createAnimation=type=>{
        console.log(type)
        let magicNum=Math.floor(1000+Math.random()*9000);
        this.setState({children:[...this.state.children,<Emoji key={magicNum} emojiType={type} magicNum={magicNum} animationHasEnd={this.animationHasEnd}/>]});
    }
    animationHasEnd=(childIndex)=>{
        let newChildren=this.state.children.filter(function(children){
            // console.log(children.props.magicNum+' '+childIndex)
            return children.props.magicNum!=childIndex
        })
        this.setState({children:newChildren});
    }
    render(){
        return ( 
            <React.Fragment>
                <button onClick={()=>this.createAnimation('like')}>Like</button>
                <button onClick={()=>this.createAnimation('love')}>Love</button>
                <button onClick={()=>this.createAnimation('support')}>Support</button>
                <button onClick={()=>this.createAnimation('wow')}>WOW</button>
                <button onClick={()=>this.createAnimation('haha')}>HAHA</button>

                <div className="previewemoji">
                {this.state.children.map(child=>child)}
                </div>
            </React.Fragment>
        );
    } 
    
}
export default Emojianim;