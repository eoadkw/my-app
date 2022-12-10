import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import cat from '../../public/cat.jpg'
import Github from '../components/Github'

export default function post5() {
  return (
    <Layout>
      <div className="bg-white-100 flex justify-center mx-auto my-4 w-3/4">
        <div>
          <h5>
            광안리는 밤이 되면 해운대만큼 빛이 나는 아름다운 해수욕장이다. 밤에
            즐길 수 있는 다이닝 핫스팟으로 유명하며 많은 먹거리와 바들이 위치해
            있다.
          </h5>
          <ul>
            <Image src="/busan1.jpeg.jpg" width={250} height={150} />
          </ul>
          <br></br>
          <h5>
            우리나라의 대표 해수욕장이자 부산하면 바로 떠오르는 해운대
            해수욕장은 매년 여름마다 인기 있는 휴양지로 선정되는 명소입니다.
            해운대는 해수욕장뿐만 아니라 해수욕장 주변에 들어선 5성급 호텔부터
            게스트하우스까지 다양한 숙소, 그리고 부산에서만 맛볼 수 있는
            맛집들이 있어 많은 사람들이 찾는 곳입니다. 해운대 해수욕장 주변의
            누리마루 APEC 하우스가 있는 동백공원, 화려한 야경으로 유명한 더베이
            101, 높은 곳에서 해운대를 바라볼 수 있는 달맞이길, 그리고 소소한
            식당들과 독특한 카페들이 모여있는 해리단길도 함께 들려보세요.
          </h5>
          <br></br>
          <br></br>
          <ul>
            <Image src="/busan2.jpeg.jpg" width={250} height={150} />
            <br></br>
            <br></br>
          </ul>
          <ul>
            <h5>
              달맞이 길을 따라 해월정과 벚꽃단지를 지나다 보면 넓게 펄쳐진
              바다를 접하게 된다. 아직까지 자연의 아름다움을 그대로 간직한 이곳
              송정해수욕장은1965년 7월 9일 개설되어 매년 6월1일부터 8월 31일까지
              개장된다. 백사장 길이는 1.2km,폭 30~60m,면적 54,000㎡이며
              수용능력은 약 10만명이다. 송정해수욕장에서는 해마다 대보름
              미역축제와 송정해변축제, 송정죽도 문화제 등 많은 행사가 열리고
              있다.
            </h5>
            <br></br>
          </ul>
          <ul>
            <Image src="/busan3.jpeg.jpg" width={250} height={150} />
            <br></br>
          </ul>
        </div>
      </div>
      <Github />
    </Layout>
  )
}
