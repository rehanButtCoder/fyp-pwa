// import img1 from "../images/Forgot password.png";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { resetPass } from "@/services/auth/auth";

function ResetPage() {
    const router = useRouter();

  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (fData) => {
    const data = {
      email: fData.email,
      password: fData.password,
      password_confirmation: fData.conpassword,
    };
    const resp = await resetPass(data)
    if (resp?.status === 200) {
        router.push("/");
      } else {
        setLoader(false);
        Swal.fire({
          title: resp?.data?.message || "Password has been Updated!",
          timer: 1500,
          icon: 'error',
          showConfirmButton: false,
        });
      }
  };
  return (
      <div class="main1">
        {/* <div class="custom_img1">
          <img src={img1} alt="img" />
        </div> */}
        <div class="custom_fields1">
          <label for="">Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="customer@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
        </div>
        <div class="custom_fields1">
          <label for="">Type Password:</label>
          <input
            type="text"
            className="form-control"
            placeholder="customer@gmail.com"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">This field is required</span>
          )}
        </div>
        <div class="custom_fields1">
          <label for="">Re-type Password:</label>
          <input
            type="text"
            className="form-control"
            placeholder="customer@gmail.com"
            {...register("conpassword", { required: true })}
          />
          {errors.conpassword && (
            <span className="error">This field is required</span>
          )}
        </div>
        <div class="custom_button2">
          <button disabled={loader} onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </div>
  );
}
export default ResetPage;
