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
            <l1> ### 여행일기 ###</l1>
          </ul>
          <br></br>
          <ul>
            <h7>
              2021.10.13 군인친구들이랑 여수를 다녀왔어요.<br></br>
              먼저 숙소 냥이가 저희를 반기네요
            </h7>
          </ul>
          <br></br>
          <br></br>
          <ul>
            <Image src={cat} width={250} height={150} />
          </ul>
          <br></br>
          <br></br>
          <ul>
            <h20>
              귀여워서 만지려고하니 계속 도망가서 만지는건 포기..ㅠㅠ<br></br>
            </h20>
          </ul>
          <ul>
            <h20>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              이후 시간이 늦어서 계획했던 바베큐파티를 미리하기로하고<br></br>
              마트에서 공수한 고기를 바로 불판위에 조졌어요.
            </h20>
          </ul>
          <br></br>
          <br></br>
          <ul>
            <Image
              src="/KakaoTalk_20221209_144326801_15.jpg"
              width={250}
              height={150}
            />
            <br></br>
            <br></br>
          </ul>
          <ul>
            <h5>직접 숯불에 구워먹으니 맛있더라구요 ㅎㅎㅎ</h5>
            <br></br>
            <br></br>
          </ul>
          <ul>
            <Image
              src="/KakaoTalk_20221209_144326801_14.jpg"
              width={250}
              height={150}
            />
            <br></br>
            <br></br>
            <h20>이렇게 가볍게 맥주도 먹었어요</h20>
            <br></br>
            <br></br>
            <h25>
              맥주도 즐겁게먹고 <br></br>
              분위기가 무르익어갈때쯤
              <br></br>
              <br></br>
              우리가 이 호텔에 온 이유인 <h1>수영장</h1>에 갔어요.
              <br></br>
              <br></br>
              급하게 풀장에 뛰어들어서 풀장전체사진은 없지만<br></br>
              1시간동안 엄청 즐겁게 놀았답니다.
            </h25>
            <br></br>
            <br></br>
            <Image
              src="/KakaoTalk_20221209_144326801_12.jpg"
              width={290}
              height={150}
            />
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <h25>다놀고난후에 숙소에서 개지리는 안주랑 못다한 술을 먹고</h25>
            <br></br>
            <br></br>
            <br></br>
            <Image
              src="/KakaoTalk_20221209_153537507_01.jpg"
              width={250}
              height={150}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h25>뻗어서 잤답니다.</h25>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4>그렇게 다음날</h4>
            <br></br>
            <br></br>
            <Image
              src="/KakaoTalk_20221209_161746248.jpg"
              width="250"
              height={150}
            />
            <br></br>
            <br></br>
            <br></br>
            <h25>여수당이란 먹거리 유명 가게도 가고</h25>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Image src="/1212.jpg" width={250} height={150} />
            <br></br>
            <br></br>
            <h25>힘겹게 산타서 흑염소도 보고왔어요</h25>
            <br></br>
            <br></br>
            <h3>이후 집에 와서 푹쉬었답니다.</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>끝</h2>
          </ul>
        </div>
      </div>
      <Github />
    </Layout>
  )
}
