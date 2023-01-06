import { NextPage } from "next";
// import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

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
        console.log("asd");
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
                        {...register("name", { required: true })}
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
                        {...register("password", { required: true })}
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
                        {...register("confirmPassword", {
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
                        {...register("phone", { required: true })}
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
