import React from 'react';
import Emoji from './emoji';


class Emojianim extends React.Component{
    constructor(props){
        super(props);
        this.state={children:[],magicNum:1};
    }
    createAnimation=type=>{
        console.log(type)
        this.setState({magicNum:++this.state.magicNum});
        this.setState({children:[...this.state.children,<Emoji key={this.state.magicNum} emojiType={type} magicNum={this.state.magicNum} animationHasEnd={this.animationHasEnd}/>]});
    }
    animationHasEnd=(childIndex)=>{
        let newChildren=this.state.children.filter(function(children){
            // console.log(children.props.magicNum+' '+childIndex)
            return children.props.magicNum!==childIndex
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