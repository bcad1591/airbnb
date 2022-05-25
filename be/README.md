## 1주차 수요일 리뷰 요청

### 진행 내용
#### AWS 인프라 구성
+ AWS 신규 VPC 생성 및 ec2 서브넷과 db 서브넷 구성
+ RDS(MySQL) 생성 및 환경 설정(Timezone, character set 등)
+ GitHub Action 및 Docker를 통한 배포(학습 중)

#### 애플리케이션
+ 도메인 모델링 및 테이블 설계(진행 중)
  + 이와 관련 프론트 엔드 팀원들과도 논의 지속 중

#### 도메인 모델과 테이블 설계(초안)
> ```
> 객체별 연관관계
> Member : Reservation = 1 : N
> Reservation : Accommodation = 1 : 1
> Accommodation : Facility = 1 : 1
> 
> 회원(Member): 회원은 이름과 이메일 그리고 예약(reservations) 리스트를 가집니다.
> 예약(Reservation): 한 번 예약 시 여러 개의 숙박을 예약할 수는 없으므로 예약과 숙소(Accommodation)는 일대일 관계입니다. 이때 예약은 예약한 회원(member)과 기타 예약 정보를 가집니다.
> 숙소(Accommodation): 숙소 관련 정보(가격, 위치, 이미지 파일경로 등)를 가집니다. 숙소 관련 시설 정보(Facility)와 일대일 관계입니다.
> 시설(Facility): 숙소 관련 시설에 대한 정보(욕실의 개수, 인터넷 사용 가능유무 등)를 가집니다.
> ```
> ![image](https://user-images.githubusercontent.com/82401504/170213984-0840cf7b-9cdd-4f20-8687-2c3065dde66b.png)
