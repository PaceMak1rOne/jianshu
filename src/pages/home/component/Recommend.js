import React, { Component } from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
    render() {
        let {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map(value=>{
                        return(
                            <RecommendItem key={value.get("imgUrl")} imgUrl={value.get("imgUrl")} />
                        )
                    })
                }
             
            </RecommendWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       list:state.getIn(["home","recommendList"])
    }
}
export default connect(mapStateToProps)(Recommend)