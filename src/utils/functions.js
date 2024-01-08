/* eslint-disable object-shorthand */
/* eslint-disable no-plusplus */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
// import { toast } from "react-toastify";

// single image
export function SingleImageUploader(props) {
  const { setPicture, setImgData } = props;

  const imagesPreview = (e) => {
    debugger;
    if (e.target.files[0]) {
      const allowedImage = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
      ];
      const checkImageTypeAndSize = allowedImage.includes(
        e.target.files[0]?.type
      );
      if (e.target.files[0]?.size <= 10485760 && checkImageTypeAndSize) {
        const reader = new FileReader();
        setPicture(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
      } else {
        // toast.error("Must be an Image of type png,jpg,jpeg,gif with max size of 10MB !", {
        //     position: toast.POSITION.TOP_CENTER
        // });
        // toast.success("Success Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER,
        //   className: 'fooBar'
        // });
      }
    }
  };

  return (
    <button>
      Upload
      <input
        id="fileInput"
        onChange={imagesPreview}
        accept="image/*"
        type="file"
      />
    </button>
  );
}
