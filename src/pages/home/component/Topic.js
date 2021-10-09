import React, { Component } from 'react'
import { TopicWrapper,
         TopicItem

}
 from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
    render() {
        let {list} = this.props
        return (
            <TopicWrapper>
                {
                    list.map(value=>{
                        return(
                            <TopicItem key={value.get("id")} >
                                <img alt="" className="topic-pic" src={value.get("imgUrl")} />
                                {value.get("title")}
                            </TopicItem>
                        )
                    })
                } 
            </TopicWrapper>

        )
    }
}
const mapStateToProps = (state) =>{
  return{
      list: state.getIn(['home','topicList'])
  }
} 
export default connect(mapStateToProps)(Topic)