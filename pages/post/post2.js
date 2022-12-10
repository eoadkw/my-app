import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import cat from '../../public/cat.jpg'
import Github from '../components/Github'

export default function post1() {
  return (
    <Layout>
      <div className="bg-white-100 flex justify-center mx-auto my-4 w-3/4">
        <div>
          <ul>
            <l1> 1. 강릉 안목해변</l1>
          </ul>
          <ul>
            <h7>주소 : 강원 강릉시 창해로 14번길 20-1</h7>
          </ul>
          넓은 해변가를 거닐면서 다양한 조형물을 배경으로 사진도 찍기 좋고 이쁜
          카페에 앉아 커피를 먹으면서 풍경을 보기 좋다.
          <br></br>
          <ul>
            <Image src="/ANMOK.jpeg" width={250} height={150} />
          </ul>
          <br></br>
          <h5>2. 경포가시연습지 </h5>
          <br></br>
          <h5>주소 : 강원 강릉시 운정동 643 </h5>
          <ul></ul>
          <h5>
            경포호를 보며 산책을 할 수 있다. 입구에 있는 독립운동가들의 조형물을
            볼 수 있으며, 호수 옆으로 예쁘게 조성된 둘레길에는 자전거를 타는
            사람들의 모습이 보였다.
          </h5>
          <br></br>
          <br></br>
          <ul>
            <Image src="/picture1.jpeg" width={250} height={150} />
            <br></br>
            <br></br>
          </ul>
          <ul>
            <h5>3. 정동진 조각공원 </h5>
            <br></br>
            <h5>주소 : 강원 강릉시 강동면 50-9</h5>
            <br></br>

            <h5>
              1인당 5000원을 내고 들어갈 수 있으며, 거대한 손 조형물과 오션뷰가
              좋다. 전망대에서 조금 아래로 내려가면 투명 스카이워크도 있다.
            </h5>
            <br></br>
          </ul>
          <ul>
            <Image src="/hand.jpeg" width={250} height={150} />
            <br></br>
            <h5>4. 하슬라아트월드 </h5>
            <br></br>
            <h5>주소 : 강원 강릉시 강동면 율곡로 1441</h5>
            <br></br>
            <h5>
              운영시간은 9~6시이며, 입장요금은 성인 15000, 청소년 13000, 어린이
              11000원이다. 미술관에는 200여점의 현대미술과 조각 작품들이
              전시되어 있다. 건물 외관에는 쇠 파이프를 사용한 작품이 있다.
              대나무 숲처럼 생긴 모습이 인상적이었다. 발상 전환의 아이디어가
              돋보이는 작품들이 많이 있었다.
            </h5>
            <br></br>
            <Image src="/hasla1.jpeg" width={290} height={150} />
            <br></br>
            <br></br>

            <br></br>
            <h5>5. 아들바위공원</h5>
            <br></br>
            <h5>주소 : 강원 강릉시 주문진읍 주문리 791-47</h5>
            <br></br>
            <h5>
              아들바위는 정말 기괴하게 생겼다. 아들바위가 있는 곳에서 아들
              낳기를 빌면 그 소원이 이루어진다는 전설이 있다. 아들부부상과
              등지상 등 바람이나 파도에 의해 깎인 절묘하면서 기괴한 암석들은
              하나의 조각 작품처럼 보였다.
            </h5>
            <br></br>
            <br></br>
            <br></br>
            <Image src="/stone.jpeg" width={250} height={150} />
          </ul>
        </div>
      </div>
      <Github />
    </Layout>
  )
}
