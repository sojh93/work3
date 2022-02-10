import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";


export const history = createBrowserHistory();



//rootReducer 추가
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

// 미들웨어 추가
// 쓸 것 있으면 thunk옆에 계속 추가해주면 됨.
const middlewares = [thunk.withExtraArgument({history:history})];
// '다른 인수를 더 넘겨줄게'란 뜻임.

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  const { logger } = require("redux-logger");
  //if문 안에 들어왔을 때만 사용할 수 있도록 require 사용함.
  middlewares.push(logger);
}

const composeEnhancers =
  // 브라우저 일때만 실행되도록 제한.(자바스크립트는 브라우저 환경 아니어도 돌아감)
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));


// 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
