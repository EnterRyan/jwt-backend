# express 계층형 아키텍처 구조
src/
├──1.routes/
│   ├── userRoutes.ts       #샘플용 유저 조회.
│   ├── authRoutes.ts       #인증&인가 관련 라우터
│		└── index.ts            #라우터 분류류 
├──2.middlewares/
│		└── logger.ts           #로깅 미들웨어 
├──3.Controller/
│   ├── userController.ts   #샘플용 유저 리스트 반환
│		└── loginController.ts  #로그인 컨트롤러
├──4.services/
│		└── loginService.ts     #로그인 비지니스 로직(해싱 및 모델호출)
├──5.models/
│		└── getUserPassword.ts  #DB조회 
├──6.config/
│		└── index.ts            #환경변수(ex 서버포트)
└──index.ts


# 디렉토리 설명
1) routes : 클라이언트에서 전달받은 요청URL과 메서드를 기반으로 적절한 컨트롤러에 전달.
2) middlewares : 클라이언트에서 오는 요청을 중간에서 검증 또는 로깅하는 구간(선택형)/ JWT검증
3) controllers : 데이터를 받고, 검증을 수행한 뒤 서비스 계층에 데이터 전달.
4) services : 비지니스 로직을 수행 
5) models : DB호출부분
6) config : 환경변수 같은 공통 변수 설정(선택형)

# 로그인 시나리오
1. Client  → [POST] /api/auth/login → Routes
2. Routes  → Controllers: login(req.body)
3. Controllers  → Services: login(username, password)
4. Services → Models: findUserByUsername(username)
5. Models   → Services: hashedPassword 반환
6. Services → JWT 생성 및 반환
7. Controllers → HTTP 응답 반환 (성공/실패)
8. Client  → HTTP 응답 처리 (토큰 저장 or 에러 표시)