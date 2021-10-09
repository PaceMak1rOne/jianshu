import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
class Write extends PureComponent {
    render() {
        let { loginState } = this.props;
        if(loginState){
             return (
          <div>
              写文章
          </div>
            )
        }else{
        // 重定向组件
        return <Redirect to="/login"/>
        }
       
        
    }
}
const mapStateToProps = (state) => {
    return {
   loginState :state.getIn(['login','login'])
    }
}

export default connect(mapStateToProps)(Write)
