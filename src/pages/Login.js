import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
}

const changePwd = (e) => {
    setPwd(e.target.value);
}

const loginAction = (user) => {
  return function (dispatch, getState, {history}) {
      dispatch(login(user));
      history.push('/');
  }
}

const login = () => {

  
    if(id === "" || pwd === "") {
      window.alert("공란 입력해주세요");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
      

      <Button
      text="로그인하기"
        _onclick={() => {
            console.log("로그인 완료!");
            deleteCookie("user_id");
            login();
        }}></Button>
        </Grid>
    </React.Fragment>
  );
};

export default Login;
