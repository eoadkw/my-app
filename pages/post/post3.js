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
          <h5>
            경복궁은 서울 중앙부에 위치해 있으며 조선시대에 건립된 최초의
            궁궐입니다. 경복궁은 일년 내내 아름다운 경관을 자랑하는데, 봄에는
            벚꽃이, 여름에는 푸르른 나무가, 가을에는 은행나무가, 그리고 겨울에는
            백옥같이 하얀 눈이 참으로 아름답습니다. 대장금, 옥탑방 왕세자 및
            별에서 온 그대 등의 한국 드라마가 모두 이곳에서 촬영되었습니다.
            경복궁의 동쪽에는 건춘문이, 서쪽에는 영춘문이, 북쪽에는 신무문이,
            그리고 남쪽에는 광화문이 있습니다. 광화문은 궁궐로 들어가는 주
            출입구로, 정교한 장인 정신, 뛰어난 건축 양식 및 아름답고
            스타일리시한 디자인이 돋보입니다. 그 중에서도 수문장 교대의식은
            놓치지 말아야할 볼거리입니다.
          </h5>
          <ul>
            <Image src="/seoul1.jpeg" width={250} height={150} />
          </ul>
          <br></br>
          <h5>
            서울을 가로지르며 흐르는 청계천은 잘 조성된 산책로로 시민들과 서울을
            여행하는 여행객들의 편안한 휴식처가 되어주는 곳입니다. 게다가
            광화문, 종로, 을지로, 시청, 서울역, 서대문, 경복궁과 같은 명소와
            가까우니, 여행으로 지쳐있다면 이곳에 들려 시원한 천에 발을 담그고
            잠깐의 휴식도 취할 수 있답니다. 무더운 여름밤 예쁜 조명이 켜진
            청계천을 따라 시원한 바람을 맞으며 연인과 함께하는 산책 데이트는
            하루를 더욱 로맨틱하게 만들어 준답니다.
          </h5>
          <br></br>
          <br></br>
          <ul>
            <Image src="/seoul2.jpeg" width={250} height={150} />
            <br></br>
            <br></br>
          </ul>
          <ul>
            <h5>
              여의도한강공원은 정치, 금융, 언론의 중심지인 여의도에 자리하고
              지하철, 버스 등 대중교통으로 접근성이 좋아 직장인과 일반시민들이
              즐겨찾는 명소이자 봄꽃축제, 세계불꽃축제, 각종 공연 및 마라톤행사
              등 다양한 행사가 이어져 볼거리와 즐길거리가 풍부한 휴식공간입니다.
            </h5>
            <br></br>
          </ul>
          <ul>
            <Image src="/seoul3.jpeg" width={250} height={150} />
            <br></br>
          </ul>
        </div>
      </div>
      <Github />
    </Layout>
  )
}
