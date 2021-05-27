

# 🛫 MoviEver🚀

---



## 0. 프로젝트 구조 

> <img src="https://i.pinimg.com/originals/3f/6e/c4/3f6ec446dd918554f22b774dbd5927c3.png" style="width: 150px; height: 150px" /> <img src="https://www.django-rest-framework.org/img/logo.png" style="width: 250px; height: 100px" /> <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3pxw6%2FbtqIH40ge9k%2FnvUQQh9IM8pGkg9fK7cBm1%2Fimg.png" style="width: 150px; height: 150px" /> <img src="https://blog.martinwork.co.kr/images/vue/vuex.png" style="width: 250px; height: 100px" />     <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" style="width: 100px; height: 150px" />  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" style="width: 100px; height: 100px" />   <img src="https://i.pinimg.com/originals/91/94/c9/9194c978fa63798b2e882e6fda5eb953.png" style="width: 100px; height: 100px" />   <img src="https://mayankgroverconsultant.files.wordpress.com/2014/08/web-logos.png" style="width: 250px; height: 150px" />





## 1. 팀원 정보 및 업무 분담 내역

팀원 : 이유진, 김진규

공통

> - 초기 설정
> - 페이지 모델링
> - 모델, Serializer 구현
> - 배경 컬러 지정, 글씨 디자인, 애니메이션, CSS 등

이유진 👩🏻‍💻

> - 회원가입, 로그인 구현
> - 카카오 로그인 구현
> - 자유 게시판 게시글 CRUD 구현
> - 자유게시파 댓글 CRD 구현
> - 메인페이지 CSS, Carousel 구현
> - 움직이는 커버 페이지 구현
> - 평점 CSS
> - 로그인, 로그아웃 동기화
> - 추천 알고리즘 구현
> - 영화 트레일러 (YOUTUBE) 구현
> - 관리자 페이지 생성

김진규 👨🏻‍💻

> - 영화 데이터 json 생성, 데이터 푸시
> - ERD 작성
> - 추천 페이지 구현
> - 카카오 지도 구현
> - Search Bar 구현
> - 영화 상세정보 페이지 구현 (카드 배치)
> - 영화 모달 기능 구현
> - 영화 장르별 필터 구현
> - 영화 평점별, 장르별 필터 구현
> - 게시글 페이지네이션 구현
> - 관리자 페이지 연결, 권한 필터링 구현




## 2. 목표 서비스 구현 및 실제 구현 정도

### 2-1. 목표 서비스 & <u>필수 기능</u> 🌟

- 로그인, 로그아웃, 회원가입 기능 구현 (100 %) 🌟
- 자유게시판, 댓글 기능 구현 (100%) 🌟
- 영화 추천 서비스 구현 (100%) 🌟
- 영화 목록 페이지 구현 (100%) 🌟
- 영화 상세 정보 표현 기능 구현 (100%) 🌟
- 영화 평점 기능 구현 (100%) 🌟
- 관리자 페이지 구현 (100%) 🌟

### 2-2. 추가 서비스

- 카카오 로그인, 로그아웃 (90%)

  > django의 프레임워크의 jwt 토큰과 kakao의 access Token이 연동되지 않음의 문제

- Map 기능 구현 (100%)



### 2-3. 실제 구현 정도 & 기능 설명



1. 커버 화면

![image-20210527114512320](README.assets/image-20210527114512320.png)

- 처음 주소로 들어갔을 때, mp4 파일이 재생되면서 Go Home을 클릭하면 Home 화면으로 이동



2. Home 화면

![image-20210527114909996](README.assets/image-20210527114909996.png)

- 네브바

  : Home, 회원가입, 로그인, 지도, 관리자 페이지, search bar로 구성

  : 로그인시, 네브바 로그아웃으로 전환

  : 로그인 시, 로그인한 유저 이름 출력

- 가운데에 현재 상영 영화에 대해 Carousel 이 2초마다 자동으로 돌아가게 설정, 마우스를 올리면 멈추기 기능과 각도 변경 애니메이션 실행

- 왼쪽 구역에 마우스를 올리면 색 전환과 함께, 클릭시 추천 페이지로 이동

- 오른쪽 구역에 마우스를 올리면 색 전환과 함께, 자유 게이판 페이지로 이동

- 아래 화살표 버튼을 클릭 시, 영화 목록 페이지로 이동



3. 로그인, 회원가입 페이지

<img src="README.assets/image-20210527115348476.png" alt="image-20210527115348476" style="zoom: 32%;" /> <img src="README.assets/image-20210527115422912.png" alt="image-20210527115422912" style="zoom: 32%;" />

- 로그인 페이지
  : 아이디와 비밀번호를 정상적으로 입력하면 홈화면으로 이동
  : 아이디 또는 비밀번호 오류 시, 경고창 출력
  : 카카오 로그인 버튼 클릭 시, 카카오 로그인 페이지로 이동
- 회원가입 페이지
  : 아이디, 비밀번호, 비밀번호 확인 입력 창 구성
  : 비밀번호와 비밀번호 확인이 일치하지 않을 시, 경고창 출력
  : 회원가입 시, 로그인 화면으로 이동



4. 자유 게시판

<img src="README.assets/image-20210527132638015.png" alt="image-20210527132638015" style="zoom:32%;" /> <img src="README.assets/image-20210527132722874.png" alt="image-20210527132722874" style="zoom:32%;" />

<img src="README.assets/image-20210527133440365.png" alt="image-20210527133440365" style="zoom:31%;" /> <img src="README.assets/image-20210527133522021.png" alt="image-20210527133522021" style="zoom:33%;" /> 

<img src="README.assets/image-20210527132818226.png" alt="image-20210527132818226" style="zoom:33%;" /> 

- 로그아웃 상태일 때, 자유게시판을 클릭하면 로그인이 필요하다는 경고창 출력

- 글 작성하기 버튼 클릭 시, 새로운 게시글 작성 가능

- 게시글 제목, 작성자, 작성시간이 테이블에 표시됨

- 게시글 제목을 클릭시, 게시글 상세 페이지로 이동하며 댓글 입력이 가능

  : 게시글은 작성자만 수정 및 삭제 가능

  : 본인이 아닐 시 경고창 출력

  : 수정 페이지에서는 기존 게시글에 입력된 데이터 출력

  : 뒤로가기 버튼 클릭 시, 게시글 목록으로 이동

- 댓글 내용, 작성자, 작성시간이 표시됨
  : 댓글 작성자만 삭제 가능
  : 본인이 아닐 시 경고창 출력



5. 영화 목록페이지 / 상세 정보 / 영화 필터 / Search Bar

<img src="README.assets/image-20210527134220937.png" alt="image-20210527134220937" style="zoom:27%;" />  <img src="README.assets/image-20210527134645039.png" alt="image-20210527134645039" style="zoom:26%;" />  

<img src="README.assets/image-20210527134920739.png" alt="image-20210527134920739" style="zoom:26%;" /> <img src="README.assets/image-20210527135005452.png" alt="image-20210527135005452" style="zoom:27%;" /> 

- 홈화면 하단의 "더 많은 영화보기"  또는 네브바의 "Movie" 를 클릭하면 영화 목록 페이지로 이동

  : 영화 목록페이지는 Detail를 누르면 상세정보 페이지가 출력

- 상세 정보페이지는 포스터, 제목, 평점, 내용 등으로 구성됨

  : 하단으로 이동 시 해당 영화의 트렐일러 영상을 시청 가능

  : 평점 주기 가능, "--기존 평점 삭제--"을 클릭 시 평점 삭제 가능

- 영화 목록 페이지의 select bar를 클릭 시, 장르와 평점을 기준으로 필터 가능

- 네브바의 SearchBar에서 영화를 검색 시, <u>**어느 페이지에서나 📚**</u>  해당 영화 상세 정보 출력



6. 추천 페이지

<img src="README.assets/image-20210527140122960.png" alt="image-20210527140122960" style="zoom:33%;" /> <img src="README.assets/image-20210527140237734.png" alt="image-20210527140237734" style="zoom:32%;" />

- 로그아웃 상태일 시, 로그인이 필요하다는 경고창 출력

- 영화 추천 알고리즘을 적용

  : Content-based CF 알고리즘을 Rating(사용자 평점) 을 기준으로 적용

  : CF 알고리즘이란, 각 유저들이 등록한 영화평점과 평가한 유저들의 Cosine 유사도를 계산해 특정 영화에 유사한 영화들을 추천해준다.

- 해당 카드에 마우스를 올리면 카드가 아래로 이동하면서, 제목/평점/내용 이 출력됨

  : Detail 버튼을 클릭 시 영화 상세 페이지로 출력



7. 지도 페이지

![image-20210527141506746](README.assets/image-20210527141506746.png)

- 지도 페이지 초기화면은 대전 삼성화재 유성 연수원으로 설정됨
- 카카오 지도 API를 이용해 지도 기능 구현
- 검색을 통해 원하는 지역 검색 가능, 해당 관련 위치들을 왼쪽 상단에 목록으로 표시 (페이지네이션 가능)



8. 관리자 페이지

<img src="README.assets/image-20210527143010131.png" alt="image-20210527143010131" style="zoom:60%;" /> <img src="README.assets/image-20210527142929448.png" alt="image-20210527142929448" style="zoom:33%;" />

- superuser로 로그인 시, "Manger"를 클릭하면 Django 관리 페이지로 이동

  : 🚫 superuser가 아닐 시, "허가되지 않은 사용자입니다" 경고창 출력

- User, Comments, Reviews, Genres, Moviews, Like movies(평점) 관리 가능

  : model 에`__str__` 를 통해 Genre 의 name 표시, 영화 title 표시 등 사용성 향상





## 4. 데이터베이스 모델링 (ERD)

![image-20210527110630502](README.assets/image-20210527110630502.png)





## 5. 느낌점

