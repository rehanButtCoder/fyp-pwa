"use client";
// import img1 from "../images/Forgot password.png";
function ForgetPage() {
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
    };
    if (resp?.status === 200 && resp?.data?.data?.role === "customer") {
      localStorage.setItem("easyPayPwa", JSON.stringify(resp.data));
      navigate("/dashboard");
    } else {
      setLoader(false);
      Swal.fire({
        title: resp?.data?.message || "Invalid Carendentials",
        timer: 1500,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };
  return (
    <div class="main">
      <div class="custom_img1">
        <img src={img1} alt="img" />
      </div>
      <h1 class="heading">Find Your Account</h1>
      <div class="custom_fields">
        <label for="">Please enter your email address</label>
        <input
          type="text"
          className="form-control"
          placeholder="customer@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}{" "}
      </div>
      <div class="custom_button">
        <button disabled={loader} onClick={handleSubmit(onSubmit)}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
export default ForgetPage;
