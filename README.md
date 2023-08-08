# <span style='color: ff6600'>사이 좋은 사람들, **Cyworld**</span>
> 친구들과 소통하며 라이프 스타일을 공유하는 추억의 싸이월드 재현!
>
> 누구나 자신만의 미니 홈페이지를 만들어 꾸밀 수 있고, 자신의 이야기를 담을 수 있는 SNS 서비스 앱
<br />

### 언어
- JavaScript, HTML/CSS
### 라이브러리 및 기타 솔루션
- React
  - React Router
  - Redux
- styled-components
### 데이터 저장 및 관리
- Local Storage
  - Local Storage를 활용하여 데이터를 클라이언트 측에서 관리하고, <br />
    서버와의 통신 없이 필요한 정보를 로컬스토리지에서 저장하고 가져옵니다.

<br />

## 팀 구성 및 담당 기능
- **<span style='color: ff6600'>조현아</span>** `팀장`
  - 공통 영역
    - 전체 페이지 구조 설계 및 구현 - 라우터 활용
    - 메인 홈페이지, 도토리 상점 홈페이지, 미니 홈페이지 레이아웃 CSS 디자인
    - 미니홈피 gnb 메뉴 기능 구현
  - 회원가입 및 로그인 기능
  - 미니홈피 관리 기능
    - 미니홈피 관리자와 비관리자의 데이터 분리 기능
  - 미니미 기능
    - 구입, 삭제 기능
    - 현재 미니미 설정 기능
     
- **<span style='color: ff6600'>김영은</span>**
  - 업데이트 예정
 
- **<span style='color: ff6600'>우동훈</span>**
  - 업데이트 예정

- **<span style='color: ff6600'>이초롱</span>**
  - 업데이트 예정
  - 뮤직 상점 홈페이지 디자인 및 페이지 구성
    - 뮤직 리스트 기능구현 (검색, 담기, 중복데이터 알림, 동영상팝업창)
    - 뮤직 장바구니 기능구현
  - 프로필
    - 사용자의 프로필 정보를 편집하고 (저장,수정), 이미지를 업로드
  - 방명록
    - 방명록 작성 및 수정 (id 일치하는 값만 수정가능)

<br />

___

### [프로젝트 요구사항]
> 1. 회원가입을 통해 회원이 될 수 있고, 회원만 미니홈피를 이용할 수 있습니다.
> 2. 회원은 자신의 미니홈피의 기본 프로필 정보, 제목을 변경할 수 있습니다.
> 3. 회원은 자신의 미니홈피에서 **일촌평 기능**인 일촌평 관리가 가능합니다.
> <br /> 타인이 작성한 일촌평을 삭제할 수 있습니다.
> 4. 회원은 타인의 미니홈피에서 **일촌평 기능**인 일촌평 작성이 가능합니다.
> 5. 회원은 자신의 미니홈피에서 **다이어리 기능**인 다이어리 작성, 수정, 삭제를 할 수 있습니다.
> 6. 회원은 자신의 미니홈피에서 **사진첩 기능**인 사진 업로드, 삭제를 할 수 있습니다.
> 7. 회원은 자신의 미니홈피에서 **방명록 기능**인 방명록 관리가 가능합니다.
> <br /> 타인이 작성한 방명록을 삭제할 수 있습니다.
> 8. 회원은 타인의 미니홈피에서 **방명록 기능**인 방명록 작성이 가능합니다.
> 9. 회원은 도토리 상점 홈페이지에서 미니룸, 미니미, 배경음악을 구입할 수 있습니다.
> 10. 회원은 자신의 미니홈피에서 **미니홈피 관리 기능**인 미니룸, 미니미, 배경음악을 설정할 수 있습니다.

## 주요 기능
### [회원가입 및 로그인 기능] `조현아`
> **<span style='color: ff6600'>회원가입</span>**
  1. input 값을 받아와 입력 조건에 대입합니다.
  2. 이메일 중복 체크 버튼을 누르지 않으면 return 처리하여 가입되지 않습니다.
  3. 이메일이 중복될 때, 도메인이 '.com' 혹은 '.kr'이 아닐 때 return 처리하여 가입되지 않습니다.
  4. 이름, 비밀번호가 공백일 때, 비밀번호 칸과 비밀번호 확인 칸이 일치하지 않을 때 return 처리하여 가입되지 않습니다.
  5. 모든 입력 조건이 충족되면 'UserData 배열'에 저장합니다.
  6. 'UserData 배열'을 로컬 스토리지에 저장합니다.

<br />

> **<span style='color: ff6600'>로그인</span>**
  1. input 값을 받아와 입력 조건에 대입합니다.
  2. 아이디와 비밀번호가 공백일 때 return 처리하여 로그인되지 않습니다.
  3. 로컬 스토리지의 'UserData 배열'을 가지고 옵니다. 입력된 아이디와 비밀번호가 일치하는 사용자가 있으면 로그인됩니다.
  4. 현재 로그인 된 사용자의 데이터를 'user 객체'에 저장합니다.
  5. 'user 객체'를 로컬 스토리지에 저장합니다.

<br />

> **<span style='color: ff6600'>로그아웃</span>**
  1. 로그아웃 버튼을 누르면 로컬 스토리지에 저장되어 있는 'user 객체'를 removeItem으로 제거합니다.
  
<br />

----
### [미니홈피 관리 기능] `조현아`   
> **<span style='color: ff6600'>로그인한 사용자와 미니홈피 관리자(주인) 데이터의 분리 처리</span>**
  1. 모든 사용자는 자신의 미니홈피를 소유합니다. 이 때, 이메일 아이디를 식별 요소로 활용합니다.
  2. useParams를 이용하여 현재 페이지의 식별 요소를 추출합니다.
  3. 'userData 배열'에서 현재 페이지의 식별 요소인 이메일 아이디와 일치하는 데이터를 탐색합니다.
  4. 일치하는 데이터를 'nowUser 객체'에 저장합니다.
  5. 미니홈피 데이터 표시는 'nowUser 객체'에 저장된 정보를 활용합니다.
  6. 현재 로그인한 'user 객체'의 아이디와 식별 요소가 일치할 경우 미니홈피 관리 기능을 노출합니다.

<br />

> **<span style='color: ff6600'>미니홈피 제목 설정</span>**
  1. 'EDIT' 버튼을 클릭하면 'SAVE' 버튼으로 전환되며, 제목 입력 칸이 활성화됩니다. 이 버튼은 토글 형식으로 작동합니다.
  2. 제목 입력 후 'SAVE' 버튼을 누르면 해당 속성 값이 'user 객체'에 저장됩니다.
  3. 'userData 배열'을 업데이트하여 수정된 'user 객체'를 저장합니다.
  4. 변경된 'user 객체'와 'userData 배열'을 로컬 스토리지에 저장합니다.

<br />

> **<span style='color: ff6600'>미니홈피 프로필 설정</span>**
  1. 'EDIT' 버튼을 클릭하면 'SAVE' 버튼으로 전환되며, 프로필 설정 영역이 활성화됩니다. 이 버튼은 토글 형식으로 작동합니다.
  2. 현재는 사진 업로드 기능이 구현되지 않았으므로, 임시의 사진이 프로필 사진으로 설정됩니다.
  3. 자기소개 입력 후 'SAVE' 버튼을 누르면 해당 프로필 사진과 자기소개 속성 값이 'user 객체'에 저장됩니다.
  5. 'userData 배열'을 업데이트하여 수정된 'user 객체'를 저장합니다.
  6. 변경된 'user 객체'와 'userData 배열'을 로컬 스토리지에 저장합니다.

<br />

> **<span style='color: ff6600'>보유 중인 아이템 표시</span>**
  1. 삼항 연산자를 활용하여 보유한 아이템이 없을 경우, 안내 문구를 표시합니다.
  2. 보유한 아이템이 있을 경우, map 함수를 이용하여 '보유 아이템 배열'을 나열하고, 각 객체의 id 값을 input 요소에 id로 할당합니다.

<br />

> **<span style='color: ff6600'>아이템 적용 - 미니룸, 스킨, 미니미, 배경음악 설정</span>**
  1. 각 아이템 식별을 위해 변수 A를 선언합니다.
  2. input 요소의 id 값을 A 변수에 저장합니다.
  3. 아이템 적용을 위해 'userData 배열'을 관리하는 Slice에서 B 함수를 생성합니다.
  4. dispatch를 사용하여 B 함수에게 A 변수를 전달합니다.
  5. B 함수는 action.payload를 이용하여 id를 인자로 받습니다.
  6. 'user 객체'의 '보유 아이템 배열'에서 인자로 받은 id와 일치하는 객체를 탐색합니다.
  7. 'user 객체'에 '현재 적용된 아이템 속성'이 없는 경우, 이를 생성합니다.
  8. 일치하는 객체의 값을 '현재 적용된 아이템 속성' 값으로 설정합니다.
  9. 아이템 적용 영역에서 '현재 적용된 아이템 속성'이 있을 경우 해당 값을 표시하며, 없을 경우 기본 값을 표시합니다.
  
<br />

----
### [미니미 구입 기능] `조현아`   
> **<span style='color: ff6600'>장바구니에 미니미 담기 및 중복 검사</span>**
  1. 장바구니 버튼을 클릭하면 장바구니가 활성화됩니다. 이 버튼은 토글 형식으로 작동합니다.
  2. 원하는 미니미를 선택하면 해당 미니미의 id 값을 이용해 '장바구니 배열'에 추가합니다.
  3. 선택한 미니미의 id 값과 '보유 미니미 배열'의 id 값이 일치하는 객체가 있을 경우, 경고 창을 표시하며 추가되지 않습니다.
  4. 미니미가 '장바구니 배열'에 추가되면 장바구니가 자동으로 활성화됩니다.
  5. '장바구니 배열'의 길이를 활용하여 선택된 미니미 개수를 표시합니다.
  
<br />

> **<span style='color: ff6600'>장바구니에서 미니미 삭제</span>** 
  1. 삭제를 원하는 미니미의 삭제 버튼을 클릭하면 해당 미니미의 id 값을 이용해 '장바구니 배열'에서 제거합니다.
  
<br />

> **<span style='color: ff6600'>장바구니에 담긴 미니미 구입</span>**
  1. 미니미 구입 버튼을 클릭하면 '장바구니 배열'의 데이터가 'user 객체'의 '보유 미니미 배열'에 추가됩니다.
  2. '장바구니 배열'을 초기화하여 장바구니를 비웁니다.
  3. 사용자의 미니홈피 중 '설정' 페이지로 이동합니다.

<br />

----
### [다이어리 기능] `김영은`  
업데이트 예정입니다.

----
### [사진첩 기능] `우동훈`  
업데이트 예정입니다.

----
### [방명록 기능] `이초롱` 
업데이트 예정입니다.
