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
  - 다이어리 기능
    - 캘린더기반의 날짜별 데이터 분리 기능
    - 게시물 작성 및 수정 기능
    - 사용자 간의 댓글 작성 기능
    - 관리자와 비관리자의 분리를 통한 게시물 및 댓글의 관리 기능 활성화
  - 테마 상점 기능
    - 테마 별 카테고리 분리 (예정)
    - 장바구니 기능
    - 구입 및 삭제 기능
    - 페이지 레이아웃 구성 및 CSS 디자인
  - 뮤직 상점
    - 페이지 레이아웃 구성 및 CSS 디자인
 
- **<span style='color: ff6600'>우동훈</span>**
  - 미니홈피 사진첩 페이지 구성
    - 사진 리스트 노출
    - 좋아요 기능 구현
    - 댓글 작성 기능
  - 일촌 기능
    - 일촌 신청 기능 구현
    - 신청 목록 관리 기능 - 일촌 수락 및 거절 기능 구현

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
___

<br />

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
> **<span style='color: ff6600'>캘린더 기반의 날짜별 데이터 분리</span>**
1. ‘react-calendar’ 라이브러리를 사용하여 달력을 표시합니다.
2. ‘moment’ 라이브러리를 사용하여 날짜를 원하는 포맷으로 변환합니다.
3. 선택한 날짜의 데이터를 필터링하여  ‘A 객체’에 저장하고 출력합니다.
4. ‘useEffect’ 훅을 사용하여 선택일이 변경되거나 데이터가 업데이트 될 때마다 최신순으로 정렬하여 보여줍니다.

<br />

> **<span style='color: ff6600'>다이어리 작성 및 관리</span>**
1. 현재 로그인한 'user 객체'의 아이디와 식별 요소가 일치할 경우 다이어리 작성 및 관리가 가능합니다.
2. input 값으로  일기의 내용을 입력받고, 현재 날짜 및 시간 정보와 함께  ‘A 객체’를 생성합니다.
3. 입력된 내용이 없을 경우 경고창을 띄우고 종료하며, 일기를 추가한 후 초기화하고 사용자의 일기 목록으로 이동합니다.
4. ‘A 객체’를통해 Redux 스토어에 데이터를 추가하고 로컬에 저장합니다.
5. 사용자가 기존에 작성한 게시물을 수정할 수 있는 입력창을 제공하며 수정시간 정보를 현재 시간으로 갱신하여 저장합니다.
6. id가 일치하는 데이터를 찾아 데이터를 제거할 수 있습니다.

<br />

> **<span style='color: ff6600'>댓글 작성 및 관리</span>**
1. 다른 사용자의 게시물에 댓글을 작성할 수 있으며, 글 작성자와 미니홈피 소유자는 댓글을 관리합니다.
2. input 값으로  댓글 내용을 입력받고 작성자의 이름, 미니홈피 링크, 작성시간 등의 정보를 ‘comment 배열에 ’ 추가합니다
3. Redux 액션을 통해 댓글 데이터를 추가하고, 관련 사용자 데이터를 업데이트합니다.
4. 게시물에 작성된 댓글들이 목록 형태로 표시됩니다. 댓글 작성자, 내용, 작성 시간 등의 정보가 포함됩니다.

<br />

----
### [사진첩 기능] `우동훈`
> **<span style='color: ff6600'>사진 데이터 표시</span>**
  1. 현재 로그인된 사용자 정보인 'user 배열'에서 'gallery 배열'의 내용을 추출합니다.
  2. select 값이 변경될 때마다 해당 index를 활용하여 'gallery 배열' 내 객체 내용을 불러옵니다.
  3. 댓글 작성 시, 해당 객체의 'reply 배열'에 댓글 내용을 저장합니다.
  4. 하트 클릭 시 해당 객체의 'Like' 값이 1 증가하고, 다시 클릭하면 1 감소합니다.

<br />

### [일촌 기능] `우동훈`
> **<span style='color: ff6600'>일촌 신청 버튼 표시</span>**
  1. 현재 로그인된 사용자가 자신 외의 미니홈피에 접속하면 '일촌 신청' 버튼을 표시합니다.
  2. '일촌 신청' 버튼 클릭 시, 알림과 함께 'relationData 배열'에 내용을 저장하고, 중복 신청 방지를 위해 버튼을 숨깁니다.

<br />

> **<span style='color: ff6600'>일촌 맺기</span>**
  1. 다른 사용자가 자신에게 일촌 신청을 한 상태라면, '신청 현황' 버튼 클릭 시 'relationData 배열' 내에 '대기 중' 상태의 신청자 이름이 표시되며, 수락/거절 버튼이 생성됩니다.
  2. 수락 버튼 클릭 시, 상태가 '대기 중'에서 '일촌'으로 변경되며, 거절 버튼 클릭 시 'relationData 배열'에서 삭제됩니다.
  3. 'relationData 배열' 내 '일촌' 상태가 된 두 사용자는 서로의 미니홈피에 접속하면 우측 상단에 '일촌' 표시와 함께 기존의 일촌 신청 버튼이 삭제됩니다.
  
<br />

----
### [배경음악 상점 기능] `이초롱`
> **<span style='color: ff6600'>MusicBox 컴포넌트 기능</span>**
  1. 인기 음악 차트를 보여주는 컴포넌트입니다. useEffect를 이용한 데이터를 가져와 getMusicDate 액션을 dispatch하여 음악 데이터와 날짜를 가져옵니다.
  2. 검색어를 입력하여 음악을 검색할 수 있습니다.
  3. 장바구니를 보이거나 숨기는 기능을 가지고 있습니다.
  4. 검색된 음악 리스트를 MusicBoxList 컴포넌트로 전달하여 표시합니다.
  5. 선택된 음악의 상세 모달을 보여주는 기능도 있습니다.

<br />

> **<span style='color: ff6600'>MusicBoxList 컴포넌트 기능</span>**
  1. 검색어에 따라 필터링된 음악 리스트를 표시하는 컴포넌트입니다.
  2. Redux 상태에서 사용자의 좋아요 정보를 가져옵니다.
  3. 검색어를 이용하여 음악 리스트를 필터링하여 표시합니다.

<br />

> **<span style='color: ff6600'>MusicBoxItem 컴포넌트 기능</span>**
  1. 음악 박스 리스트의 각 항목을 나타내는 컴포넌트입니다.
  2. 음악의 좋아요 상태를 토글하고, 장바구니에 음악을 추가하거나 제거할 수 있습니다.
  3. 음악의 상세 정보를 모달로 보여주는 기능도 가지고 있습니다.

<br />

> **<span style='color: ff6600'>MusicBasket 컴포넌트 기능</span>**
  1. 장바구니에 담긴 음악 리스트를 보여주는 컴포넌트입니다.
  2. 장바구니에 음악을 담거나 제거할 수 있습니다. 특정 음악 아이템을 삭제하기 위해 removeCart 액션을 dispatch합니다.
  3. 음악을 장바구니에 추가하면, 장바구니 상태를 업데이트하고 musicHistory와 addedToBasket는 local state로 관리됩니다.

<br />

> **<span style='color: ff6600'>CyworldModal 컴포넌트 기능</span>**
  1. 음악의 상세 정보를 모달 형태로 보여주는 컴포넌트입니다.
  2. 음악의 제목, 가수, 음악 비디오를 표시합니다.

<br />

----
### [프로필 게시판 편집 기능] `이초롱`
> **<span style='color: ff6600'>프로필 정보 표시 및 수정</span>**
1. '수정' 버튼 클릭 시, 편집 모드가 활성화되며 버튼은 '저장' 버튼으로 전환됩니다.
각각의 프로필 정보(이름, 성별, 생년월일, 자기소개)를 입력할 수 있는 input 요소를 표시합니다.
2. input 요소의 값이 변경되면 해당 값을 Redux를 통해 업데이트합니다.
3. 현재는 사진 업로드 기능이 구현되지 않았으므로, 수정 완료 시 임시의 사진이 프로필 사진으로 설정됩니다.

<br />

> **<span style='color: ff6600'>수정 및 저장 버튼 표시 로직</span>**
1. userID와 user.emailID를 비교하여 로그인 사용자와 현재 프로필 주인을 비교합니다.
2. 편집 중인지 여부와 프로필 주인 여부에 따라 수정 또는 저장 버튼을 표시합니다.
  
<br />

----
### [방명록 작성 및 수정] `이초롱`
> **<span style='color: ff6600'>방명록 작성 기능</span>**
1. guestContent 상태: 작성한 방명록 내용을 저장합니다.
2. guestList 상태: 방명록 리스트를 관리합니다.
3. GuestSave 함수: 작성한 방명록 내용을 guestList에 저장합니다.
  
<br />

> **<span style='color: ff6600'>방명록 수정 및 삭제 기능</span>**
1. editingIndex 상태: 수정 중인 방명록의 인덱스를 저장합니다.
2. editContent 상태: 수정 중인 방명록 내용을 저장합니다.
3. GuestEdit 함수: 수정 버튼을 클릭하면 해당 방명록을 수정할 수 있는 상태를 설정합니다.
4. GuestUpdate 함수: 수정한 내용을 저장하여 방명록을 업데이트합니다.
5. GuestDelete 함수: 선택한 방명록을 삭제합니다.
  
<br />

> **<span style='color: ff6600'>페이지 로드 시 날짜 업데이트</span>**
1. useEffect : 페이지가 로드될 때 날짜 정보를 Redux를 통해 업데이트합니다.
  
<br />

> **<span style='color: ff6600'>방명록 표시 및 수정/삭제 기능</span>**
1. 방명록 리스트를 역순으로 매핑하여 최신순으로 표시합니다.
2. 수정 중인 방명록의 경우 수정 내용을 입력할 수 있는 textarea를 표시합니다.
3. 수정 및 삭제 버튼을 클릭하면 해당 방명록을 수정 또는 삭제합니다.
  
<br />

> **<span style='color: ff6600'>페이지 로드 시 기본 방명록 표시</span>** 
1. 초기 방명록 하나를 표시하며, 사용자 이름, 날짜, 이미지와 함께 내용을 표시합니다.
  
<br />

> **<span style='color: ff6600'>작성 및 수정 권한 관리</span>**
1. 사용자가 로그인한 사용자인 경우에만 방명록 작성 및 수정 가능하도록 설정합니다.
  
<br />

----
### [미니홈피 배경음악 설정 기능] `이초롱`
> **<span style='color: ff6600'>주크박스 기록 가져오기</span>**
1. date 상태: Redux의 상태에서 음악 날짜를 가져옵니다.
2. musicHistory 상태: 로컬 스토리지에서 가져온 음악 재생 기록을 관리합니다.
3. useEffect를 사용하여 페이지가 로드될 때 로컬 스토리지에서 음악 기록을 가져옵니다.
      
<br />

> **<span style='color: ff6600'>userID와 음악 기록 표시</span>**
1. user 상태: Redux의 상태에서 사용자 정보를 가져옵니다.
2. userID 파라미터: URL에서 해당 로그인 ID를 가져옵니다.
3. userID 로그인한 사용자이고, 음악 기록이 있을 경우 음악 기록을 매핑하여 표시합니다.
4. 각 음악 기록에는 날짜, 음악 제목, 가수 정보가 표시됩니다.
      
<br />

> **<span style='color: ff6600'>주크박스 배경 음악 기록 가져오기</span>**
1. date 상태: Redux의 상태에서 음악 날짜를 가져옵니다.
2. musicHistory 상태: 로컬 스토리지에서 가져온 주크박스 배경 음악 재생 기록을 관리합니다.
3. useEffect를 사용하여 페이지가 로드될 때 로컬 스토리지에서 음악 기록을 가져옵니다.
  
<br />

> **<span style='color: ff6600'>주크박스 배경 음악 삭제 기능</span>**
1. JukeboxDelete 함수: 선택한 배경 음악을 삭제하고, 삭제된 상태를 로컬 스토리지에 업데이트합니다.
  
<br />

> **<span style='color: ff6600'>주크박스 배경 음악 선택 기능</span>**
1. selectMusics 함수: 배경 음악을 선택하여 Redux 상태를 업데이트하는 함수입니다.
2. 선택한 음악 정보를 selectMusic 액션을 통해 Redux로 전달합니다.
      
<br />

> **<span style='color: ff6600'>userID 배경 음악 기록 표시 및 버튼</span>**
1. user 상태: Redux의 상태에서 사용자 정보를 가져옵니다.
2. userID 파라미터: URL에서 해당 로그인 ID를 가져옵니다.
3. userID 로그인한 사용자이고, 배경 음악 기록이 있을 경우 기록을 표시합니다.
4. 각 배경 음악 기록에는 날짜, 음악 제목, 가수 정보와 함께 적용 및 삭제 버튼이 있습니다.
      
<br />

> **<span style='color: ff6600'>배경 음악이 없는 경우 메시지 표시</span>**
1. 배경 음악 기록이 없거나 userID 아닌 경우 "설정된 배경 음악이 없습니다." 메시지를 표시합니다.
  
<br />

> **<span style='color: ff6600'>선택된 배경 음악 정보 가져오기</span>**
1. selectedMusic 상태: Redux의 상태에서 선택된 배경 음악의 정보를 가져옵니다.
      
<br />

> **<span style='color: ff6600'>userID 경우 배경 음악 정보 표시</span>**
1. user 상태: Redux의 상태에서 사용자 정보를 가져옵니다.
2. userID 파라미터: URL에서 해당 로그인 ID를 가져옵니다.
3. userID 로그인한 사용자이면서, 선택된 배경 음악 정보가 있는 경우 해당 음악의 제목과 가수를 표시합니다.
4. 선택된 배경 음악 정보가 없는 경우 "음악을 설정해주세요" 메시지를 표시합니다.
      
<br />

> **<span style='color: ff6600'>해당 userID 아닌 경우 메시지 표시</span>**
1. 해당 로그인ID가 아닌 경우에도 "음악을 설정해주세요" 메시지를 표시합니다.
