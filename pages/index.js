import React from 'react';
import Image from 'next/image';
import Layout from './components/Layout';
import Link from 'next/link';
import bg1 from '../public/background.jpg';
import cat from '../public/cat.jpg';
import Github from './components/Github';

export default function index() {
  return (
    <Layout title="Home">
      <div className="flex min-h-screen flex-col bg-gray-200 pt-4">
        <div>
          <Image
            src={bg1}
            width={1000}
            alt="bg"
            className="w-8/12 mx-auto my-0"
          ></Image>
        </div>
        <div className="text-center mt-2 mb-6">
          <h1 className="text-3xl">어서오세요!</h1>
          <p>
            웹보안프로그래밍 3조입니다.
            <br />
            저희는 여행블로그 사이트를 만들어보았으며<br></br> 게시물을
            눌러보시면 포스팅을 보실수있습니다.
            <br></br>
            아래 버튼을 클릭하시면 팀프로젝트 GITHUB를 보실수 있습니다.
          </p>
          <button className="bg-blue-500 text-white rounded px-20 py-1 mt-2 hover:bg-blue-700">
            3조 깃허브 보러가기
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white ml-4 text-center">
            <h1 className="my-4 text-xl">전역 후 여수여행</h1>
            <Image src={cat} width={200} alt="cat" className="mx-auto"></Image>
            <p>글쓴이: 이건우</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광장소, 먹거리등을 소개하는 포스팅</h1>
            <div className="mb-2"></div>
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post1'}
            >
              보러가기
            </Link>
            <div className="h-4"></div>
          </div>
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white mx-4 text-center">
            <h1 className="my-4 text-xl">강원도 강릉시</h1>
            <p>글쓴이: 어영민</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광지를 소개하는 포스팅</h1>{' '}
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post2'}
            >
              보러가기
            </Link>
          </div>
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white mr-4 text-center">
            <h1 className="my-4 text-xl">서울</h1>
            <p>글쓴이: 박성진</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광지를 소개하는 포스팅</h1>
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post3'}
            >
              보러가기
            </Link>
          </div>
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white ml-4 text-center mt-2">
            <h1 className="my-4 text-xl">제주도</h1>
            <p>글쓴이: 박성진</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광지를 소개하는 포스팅</h1>
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post4'}
            >
              보러가기
            </Link>
          </div>
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white mx-4 text-center mt-2">
            <h1 className="my-4 text-xl">부산</h1>
            <p>글쓴이: 이종민</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광지를 소개하는 포스팅</h1>
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post5'}
            >
              보러가기
            </Link>
          </div>
          <div className="w-1/4 rounded border-solid border-2 border-gray-300 bg-white mr-4 text-center mt-2">
            <h1 className="my-4 text-xl">부산</h1>
            <p>글쓴이: 이종민</p>
            <p>올린날짜: 2022.12.06</p>
            <br />
            <h1 className="text-2xl">관광지를 소개하는 포스팅</h1>
            <Link
              className="bg-blue-500 text-white rounded px-6 py-1 hover:bg-blue-700"
              href={'../post/post5'}
            >
              보러가기
            </Link>
          </div>
        </div>
        <div className="text-center my-6 bg-white leading-10">
          <h1 className="text-2xl">웹 보안프로그래밍 3조 후기</h1>
          <p>이건우: 만드는데 힘들었지만 보람찬 프로젝트였다고 생각한다. </p>
          <p>
            어영민:실습을 하면서 점점 성장하고 있다고 느낄 수 있어서 의미있는
            수업이었다.
          </p>
          <p>
            박성진 : 이번 실습으로 개발에 대해 많이 생각하는 계기가 된 것 같다.
          </p>
          <p>
            이종민 : 존경하는 교수님에게 가르침을 받는다는 것은 영광스러운
            일이었다.
          </p>
        </div>
        <Github />
      </div>
    </Layout>
  );
}
