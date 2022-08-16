#  롤링페이지 (Rolling Page)

### 🔗Link
<a href="https://rolling-page-git-develop-danopi.vercel.app/" target="_blank">DEMO</a>

<div align='center'>
<img src="https://user-images.githubusercontent.com/76831344/183794137-c9f1e410-3895-41bc-b26c-1bfe04222d69.png" width=100% />
</div>
개발 기간 : 22.07.30 ~ 22.08.10 (앞으로 계속 업데이트 예정 )
<br><br>

## 📢 개요
* 비대면 시대에 소중한 사람(가족, 스승, 지인, 친구 등등)에게 여러분들의 마음을 모아 선물할 수 있는 서비스앱입니다.
* 롤링페이지 작성 페이지를 카카오톡으로 공유하여 친구들과 함께 작성할 수 있습니다.
* 작성이 완료 되었다면 완성페이지를 소중한 사람에게 카카오톡으로 공유할 수 있습니다.

<br><br>

## 🚀 팀 소개
* 안녕하세요. 저희는 `DANOPI(다노피)` 팀입니다.
* 저희는 프론트엔드 주니어 개발자들끼리 모인 팀이며, `DANOPI(다노피)`는 `다 함께 더 높이` 성장하자는 의미를 가지고 있습니다. 
*  `DANOPI(다노피)`가 함께 걸어온 길
	* 무료 책 집필 : `알아서 잘 딱 깔끔하고 센스있게 정리하는 TypeScript 핵심 개념` (2022년 6월 2일 출판 [리디북스](https://ridibooks.com/books/2773000057))
	* 컨퍼런스 : 제주 웹 컨퍼런스에서 `TypeScript Basic:스크립트에 타입을 더하다`라는 주제로 연사 (2022년 6월 3일 [발표 영상](https://www.youtube.com/watch?v=3wkw5IplrjQ&t=2621s))
	* 프로젝트 : 롤링페이지(Rolling Page) 

<br>

|**FE김민영**|**FE 박성범**|**FE 양다은**|
| :---: | :---: | :---: |
| <img src="https://avatars.githubusercontent.com/u/73983890?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/87704703?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/75559282?v=4" height=200 width=200 />|
|🔗 [BradleyyKim](https://github.com/BradleyyKim)|🔗 [WannabeCM](https://github.com/WannabeCM)|🔗 [dana-y](https://github.com/dana-y)|

|**FE 이세영**|**FE 전유진**|**FE 주다빈**|
| :---: | :---: | :---: |
| <img src="https://avatars.githubusercontent.com/u/97039896?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/94890646?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/76831344?v=4" height=200 width=200 />|
|🔗 [sweeeeetpotato](https://github.com/sweeeeetpotato)|🔗 [ujin16](https://github.com/ujin16)|🔗 [joodb](https://github.com/joodb)|


<br><br>

## ⚙️ 기술 및 개발 환경
### [기술]
- React
- TypeScript
- Styled Components
- Figma

### [개발 환경]
|개발환경|선택한 방식|
|:---:|:---:|
|브랜치 전략|git-flow|
|이슈 관리|github-Issues|
|구조 관리|아토믹 디자인 패턴|
|정적 코드 분석 도구|ESLint|
|Code Formatter|Prettier|
|Communication|Github와 & Discord를 Webhook 연동|


<br><br>


## 🌈 구현 기능
* 작성 전 롤링페이지
	* 롤링페이지의 받는 사람(제목)을 입력하여 롤링페이지 보드를 생성
	
* 롤링페이지 보드 (제목이 설정 된 페이지)
	* 플러스(+) 버튼을 클릭하여 포스트잇 작성
	* 포스트잇에 들어갈 이모지 선택 가능
	* 포스트잇 상단 우측에 있는 x버튼을 통해 포스트잇 삭제 가능
	* 미리보기 버튼으로 완성된 모습 확인 가능
	
* 작성 완료된 롤링페이지
	* 완성된 페이지를 공유하기 버튼을 통해 카카오톡으로 공유 가능


<br><br>

## 📂 폴더 구조
```
assets : 이미지 파일 집합
elements : 기능적/의미론적으로 가장 작은 단위의 컴포넌트의 집합 (Atom) - button, input, img 등등
components : atom을 조합한 컴포넌트의 집합 (Molecule / Organism / Template)
pages : 라우터가 존재하는, 즉 사용자가 보게되는 실제 페이지
constants : 전역으로 사용되는 상수들의 집합
				
📦ROLLING-PAGE
├─📂public
└─📂src
    ├─📂app
    ├─📂assets
    ├─📂components
    │  ├─📂authorInput
    │  ├─📂container
    │  ├─📂contentsInput
    │  ├─📂deleteModal
    │  ├─📂emojiModal
    │  ├─📂header
    │  ├─📂post
    │  ├─📂shareModal
    │  └─📂titleInput
    ├─📂constants
    ├─📂elements
    │  ├─📂buttons
    │  ├─📂emoji
    │  ├─📂input
    │  └─📂textarea
    ├─📂pages
    │  ├─📂board
    │  ├─📂fixedBoard
    │  └─📂main
    └─📂types
				
```
