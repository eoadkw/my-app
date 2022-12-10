import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import cat from '../../public/cat.jpg'
import Github from '../components/Github'

export default function post4() {
  return (
    <Layout>
      <div className="bg-white-100 flex justify-center mx-auto my-4 w-3/4">
        <div>
          <h5>
            한라산은 제주도의 상징이자 순상화산의 중심 봉우리이며, 해발고도
            1,950m로 남한에서 가장 높은 산입니다. 한라산은 정상부의 백록담
            분화구, 영실기암의 가파른 암벽과 약 40여 개의 오름 등 다양한
            화산지형을 갖고 있습니다.
          </h5>
          <ul>
            <Image src="/jeju1.jpeg" width={250} height={150} />
          </ul>
          <br></br>
          <h5>
            성산일출봉(城山日出峰)은 제주특별자치도 서귀포시 성산읍 성산리에
            있는 산이다. 커다란 사발 모양의 분화구가 특징으로, 분화구 내부의
            면적은 129,774m2이다. 높이는 182m이다. 성산 일출봉에서의 일출은
            대한민국에서 가장 아름다운 해돋이로 꼽히며 영주십경(瀛州十景) 중
            하나이다.
          </h5>
          <br></br>
          <br></br>
          <ul>
            <Image src="/jeju2.jpeg" width={250} height={150} />
            <br></br>
            <br></br>
          </ul>
          <ul>
            <h5>
              제주올레는 제주도 마을의 골목길에서 제주를 하나로 크게 잇는 길이
              되었습니다. 총 스물여섯 개의 코스가 촘촘히 연결되어 있어 제주의
              속살을 하나씩 감상할 수 있는 길인데요. 무려 425km에 달하는
              길이이니만큼 쉽게 도전하기 어려운 것도 사실입니다.
            </h5>
            <br></br>
          </ul>
          <ul>
            <Image src="/jeju3.jpeg" width={250} height={150} />
            <br></br>
          </ul>
        </div>
      </div>
      <Github />
    </Layout>
  )
}
