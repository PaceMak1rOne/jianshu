import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import { actionCreators } from './store';
class Login extends PureComponent {
    render() {
        let { loginState } = this.props;
        if(!loginState){
             return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" ref ="inputZh"/>
                    <Input placeholder="密码 " type="password" ref ="inputMm"/>
                    <Button onClick={()=> this.props.login(this.refs.inputZh.value,this.refs.inputMm.value)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
            )
        }else{
        // 重定向组件
        return <Redirect to="/"/>
        }
       
        
    }
}
const mapStateToProps = (state) => {
    return {
        loginState: state.getIn (['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login(account , password){
        console.log(account,password)
           dispatch(actionCreators.login(account , password))
        }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Login)
