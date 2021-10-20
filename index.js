let btn1 = document.querySelector(".credit__container-1");
btn1.addEventListener("click", () => {
  Swal.fire({
    title: "",
    width: 600,
    padding: "3em",
    confirmButtonText: "Yêu <i class='fas fa-heart'></i>",
    confirmButtonColor: 'red',
    background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    imageUrl:
      "https://lucloi.vn/wp-content/uploads/2020/03/89039777_205359897206887_2718409497423904768_n.jpg",
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
});

let btn2 = document.querySelector(".credit__container-3");
btn2.addEventListener('click', () => {
    Swal.fire({
      title: "Chọn 1 hoặc 2",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "1",
      denyButtonText: `2`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ảnh xink <i class='fas fa-heart'></i>",
          imageUrl: "./186245677_470983914009374_5249011500127264201_n.jpg",
          //   imageWidth: 400,
          //   imageHeight: 500,
          imageAlt: "Custom image",
          confirmButtonText: "Yêu <i class='fas fa-heart'></i>",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Ảnh xink x2 <i class='fas fa-heart'></i>",
          imageUrl: "./224553521_250859163536377_4580318010468876593_n.jpg",
          //   imageWidth: 400,
          //   imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: "Yêu <i class='fas fa-heart'></i>",
        });
      }
    });
})
