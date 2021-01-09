# Learn-Webpack
## NPM
> **NPM** : **N**ode **P**ackage **M**anager

명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저

[https://npmjs.com](https://npmjs.com)에서 필요한 라이브러리를 내려받아 설치하고 삭제하는 등의 관리를 해주는 프로그램

세계에서 가장 큰 오픈소스 라이브러리 생태계 중 하나

NPM은 Node.js를 설치하면 함께 설치됨

---

### NPM 장점

1. 라이브러리의 버전와 의존성 관리 수월
2. 라이브러리의 CDN을 구하기 위해 해당 사이트를 검색하여 찾을 필요 없음

---

### **package-lock.json**

패키지들 간의 내부 의존 관계 저장

### package.json

프로젝트 정보, 관련 패키지 정보 등을 기록

```json
{
  "name": "package",  // 프로젝트 이름
  "version": "1.0.0",  // 프로젝트 버전
  "description": "",  // 프로젝트 설명
  "main": "index.js",
  "scripts": {  // npm으로 실행할 수 있는 명령어의 모음
		"start": "",
		"build": "",
    "test": "",
  },
  "keywords": [],
  "author": "",  // 작성자
  "license": "ISC",  // 라이선스 종류
  "dependencies": {  // **배포용** 라이브러리 *[npm install **(-S)]***
		// **build 시 애플리케이션 코드 안에 포함**
		"jquery": "",
		"react": "",
		"angular": "",
		"vue": "",
	}, 	
  "devDependencies": {  // **개발용** 라이브러리 *[npm install **-D]***
		// **build 시 애플리케이션 코드 안에 포함되지 않음**
		"webpack": "",
		"sass": "",
	} 	
}
```

---

### **명령어 모음**

- **옵션**
- **설치**
- **삭제**
- **업데이트**
- **조회**
- **실행**
- **설정**

---
