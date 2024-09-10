# [React] Context API vs Zustand 렌더링 최적화 비교

## 코드 구성

`count`, `age` 변수를 사용하여 컴포넌트 구성  
`count` 변수만 사용하는 컴포넌트  
`age` 변수만 사용하는 컴포넌트

상태 라이브러리 `context api`, `zustand`를 이용하여 값 변경

[• Context API](https://github.com/Codiving/context-zustand/commit/0a1c469b3a4e6ee07c3021f71b24b0e46bda6565)  
[• Zustand - 실패](https://github.com/Codiving/context-zustand/commit/08f21d949a0e05f083f210294c645d1b085001db)  
[• Zustand - 성공](https://github.com/Codiving/context-zustand/commit/2e05c918a7b4ac552e9f96532823edb475a8c72d)

## 결론

Zustand를 최적화하여 사용하면 렌더링 최적화가 가능하다.
