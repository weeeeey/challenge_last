import { NextPage } from 'next';
// import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';

interface FormProps {
    name: string;
    password: string;
    confirmPassword: string;
    phone: number;
}

const Index: NextPage = () => {
    // const router = useRouter();
    const { register, handleSubmit } = useForm<FormProps>();
    const onVaild = (form: FormProps) => {
        console.log(form);
        // router.push("/log-in");
    };
    const tokenConfirm = () => {
        console.log('asd');
    };
    return (
        <div className="max-w-xl mt-20 mx-auto w-full h-screen flex flex-col space-y-10 ">
            <h1 className="text-3xl font-semibold">계정을 생성하세요</h1>
            <form
                className=" flex flex-col space-y-7"
                onSubmit={handleSubmit(onVaild)}
            >
                <div className="relative z-0 w-full  group">
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        id="floating_name"
                        className="rounded-lg pt-4 pb-2 pl-3 w-full text-gray-900 bg-transparent border-2  border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_name"
                        className="bg-white peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:px-2 peer-focus:left-1 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6 left-2"
                    >
                        아이디
                    </label>
                </div>

                <div className="relative z-0 w-full  group">
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        id="floating_pass"
                        className="rounded-lg pt-4 pb-2 pl-3 w-full text-gray-900 bg-transparent border-2  border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_pass"
                        className="bg-white peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:px-2 peer-focus:left-1 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6 left-2"
                    >
                        비밀번호
                    </label>
                </div>
                <div className="relative z-0 w-full  group">
                    <input
                        {...register('confirmPassword', {
                            required: true,
                            validate: { samePass },
                        })}
                        type="password"
                        id="floating_confirm"
                        className="rounded-lg pt-4 pb-2 pl-3 w-full text-gray-900 bg-transparent border-2  border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_confirm"
                        className="bg-white peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:px-2 peer-focus:left-1 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6 left-2"
                    >
                        비밀번호 확인
                    </label>
                </div>

                <div className="relative z-0 w-full  group flex items-center">
                    <input
                        {...register('phone', { required: true })}
                        type="tel"
                        id="floating_phone"
                        className="appearance-none rounded-lg pt-4 pb-2 pl-3 w-full text-gray-900 bg-transparent border-2  border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_name"
                        className="bg-white peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:px-2 peer-focus:left-1 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-6 left-2"
                    >
                        핸드폰 번호
                    </label>
                    <button
                        onClick={tokenConfirm}
                        className="absolute right-1 bg-slate-400 border-2 rounded-lg p-2 text-white focus:bg-blue-600 hover:bg-blue-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                        인증번호 전송
                    </button>
                </div>
                <input
                    className="hidden appearance-none rounded-lg pt-4 pb-2 pl-3 w-full text-gray-900 bg-transparent border-2  border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                />
                <button className="border-2 rounded-full w-full h-16  text-white bg-gray-400 focus:bg-blue-600 hover:bg-blue-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Index;

/**1주일동안 아래 졸업작품을 마무리하고 제출합니다.
이때까지 배운 것을 토대로, 미니 트위터 클론을 완성합니다.
NextJS, Prisma, Tailwind, API Routes 그리고 SWR 를 활용하여 아래 페이지를 완성합니다.
/ : 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
/create-account : 계정을 생성하는 페이지입니다.
/log-in : 로그인을 진행하는 페이지입니다.
/tweet/[id] : 트윗의 상세 정보를 보는 페이지 입니다.
/:
After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.
로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
또한 트윗을 작성할 수 있어야 합니다.
/tweet/[id]:
The user should be able to see the tweet + a Like button.
When the Like button is pressed, save the like on the database and reflect the update using mutate from useSWR.
사용자는 id에 해당하는 트윗의 내용과 좋아요 버튼을 볼 수 있어야 합니다.
좋아요버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 하며 useSWR의 mutate를 사용하여 업데이트를 반영해야 합니다.
참고사항
챌린지 blueprint에는 SQLite을 기반으로 한 Prisma가 설정되어있습니다.
prisma.schema파일을 변경했다면 npm run db-sync를 실행하세요.
SWR와 tailwind도 챌린지 blueprint에 설정되어 있습니다.
환경설정
블루프린트를 다운로드 받아. 로컬 컴퓨터에서 작업하세요.
Blueprint > File > Export to Zip
완료 후 컴퓨터에서 열고. npm i 을 실행하세요.
코딩 챌린지를 완료한 후. https://codesandbox.io/dashboard 으로 이동하여.
'Create Sandbox' > Import Project 한 후에 프로젝트의 깃헙 URL 을 복사. 붙여넣기 하면 됩니다.
제출방법
오늘의 템플릿: 위의 Today's Blueprint 버튼을 클릭하세요!
Code Sandbox라는 툴을 이용하여 제출합니다. 사용방법
제출기간: 다음주 월요일 오전 6시까지
챌린지 어떠셨나요?
마지막 피드백, 소감, 후기, 꿀팁 등을 꼬옥- 남겨주세요! 더 좋은 챌린지를 만드는데 커다란 힘이 됩니다.
게시판에 남기기 */

/**
 *TA's 힌트
Prisma 데이터 모델 작성 시 Relation을 활용하세요.
Relation 공식 문서
API를 통하여 값을 받아오고 싶을떈 useSWR을 사용합니다.
SWR 공식 문서
API에 값을 전달하고 싶을땐 fetch API를 사용합니다.
fetch API 공식 문서
로그인을 완료했을 경우 iron-session을 사용하여 로그인 정보를 저장 할 수 있습니다.
페이지를 이동하고 싶을땐 useRouter훅을 사용하여 리다이렉션을 할 수 있습니다.
useRouter 공식 문서
react-hook-form의 watch 함수를 사용하여 사용자가 값을 모두 입력하지 않았을 경우 버튼을 비활성화 할 수 있습니다.
watch 공식 문서
try-catch 구문과 setError함수를 사용하면 API에서 오류가 발생했을 경우 원하는 오류 문구를 출력 할 수 있습니다.
setError 공식 문서
트윗 상세페이지를 구현할땐 useRouter의 query 객체를 활용합니다.
router 객체 공식 문서
useRef를 활용하면 페이지 로딩이 완료된 후 특정 코드를 실행할 수 있습니다.
useRef 공식 문서
 */
