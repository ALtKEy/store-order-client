# 가게 주문번호(Store Order) 클라이언트 모듈
## 개요
* 키오스크 또는 모바일 앱에서 주문하여 받은 번호를 이용자들이 화면에 주문번호의 상태(e.g 조리중, 진행중, 완료됨, 제공)등을 출력하기 위한 클라이언트 모듈
* 주문번호의 상태를 관리하고, 주문번호에 대한 정보를 출력
* WebSocket 사용자/관리자에 주문번호를 갱신

## 개발환경
* NodeJS v22, React 19, Typescript 5

## 설치
* 지원환경
  * OS - Windows(지원예정), Linux, MacOS
* Release 패키지 다운후 압축 해제
  * `tar -xvf store-order-server-[version].tar.gz -C ./`
  * 실행환경에 맞게 실행 
    * Linux - `./bin/startup.sh start`
    * Windows - 지원예정
* Server 모듈 설치 및 실행 [https://github.com/ALtKEy/store-order-server]
   * 실행순서는 Server -> Client

## 개발자
* Kim Jung-Tae (https://github.com/ALtKEy)
* Park Hee-Seon (https://github.com/heeseon0201)
* Jo Hee-Hun (https://github.com/hhjo12)

## Special Thanks
* 저희 가게 주문번호 모듈은 **[이삭토스트 수원조원점](https://search.naver.com/p/crd/rd?m=1&px=851&py=343&sx=851&sy=343&vw=2560&vh=1209&bw=672&bh=938&bx=130&by=190&p=jZY5VlqVOsossUGj4Rossssst%2Bd-270016&q=%EC%9D%B4%EC%82%AD%ED%86%A0%EC%8A%A4%ED%8A%B8+%EC%88%98%EC%9B%90%EC%A1%B0%EC%9B%90%EC%A0%90&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=kzEv1twWbU3K1a4SlgWbJw%3D%3D&time=1749797299849&abt=%5B%7B%22eid%22%3A%22SHOP-FORU%22%2C%22vid%22%3A%225%22%7D%5D&a=nmb_lpa*1.tit&r=&i=1446927572&u=https%3A%2F%2Fmap.naver.com%2Fp%2Fentry%2Fplace%2F1446927572%3Flng%3D127.0161308%26lat%3D37.3032893%26placePath%3D%252Fhome%26entry%3Dplt%26searchType%3Dplace&cr=1)** 요구사항에 맞춰 개발 및 운영되고 있으며, 오픈소스로 제공됩니다. (LICENSE 문서 참조)