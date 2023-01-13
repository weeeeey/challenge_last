import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface FormProps {
    name: string;
    email?: string;
    phone?: number;
}

const Login: NextPage = () => {
    const { register, handleSubmit } = useForm<FormProps>();
    const onVaild = (form: FormProps) => {
        console.log(form);
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
                        Name
                    </label>
                </div>

                <button className="border-2 rounded-full w-full h-16  text-white bg-blue-400 focus:bg-blue-600 hover:bg-blue-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
                    로그인
                </button>
            </form>
        </div>
    );
};

export default Login;
