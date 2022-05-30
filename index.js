const projectsContainer = document.querySelector(".projects__content");

const projectsData = [
  {
    name: "E-Commerce",
    description: [
      "Built a full-stack web app to allow users to buy products from the site",
      "Used React to allow users to instantaneously update the cart interface without reloading.",
      "build beautiful and mind-blowing user interfaces and high-performance components",
      "used Redux-Toolkit to store the states and save them in local storage",
      "used firebase to fetch products and display the product details to the user",
    ],
    techStack: [
      "Html",
      "Css",
      "Js",
      "React",
      "Redux",
      "Redux-toolkit",
      "Firebase",
    ],
    liveSite: "https://ahmad-ecommerce-project.netlify.app/",
    github: "https://github.com/Ahmad-jama/E-commerce-app",
    images: [
      "assets/E-home.PNG",
      "assets/E-show.PNG",
      "assets/E-all.PNG",
      "assets/E-cart.PNG",
      "assets/E-single.PNG",
    ],
  },
  {
    name: "Blog",
    description: [
      "used Styled-components to build custom and reusable component",
      "  use Firebase-storage to upload the images",
      " upload Article to firebase-firestore and display it without reloading",
      "users can write articles in markdown format and the site will convert it to jsx",
    ],
    techStack: [
      "Html",
      "Styled-components",
      "Js",
      "React",
      "Firebase",
      "React-icons",
      "Firebase Storage",
    ],

    liveSite: "https://ahmad-jama-blog.netlify.app/",
    github: "https://github.com/Ahmad-jama/blog-project",
    images: [
      "assets/B-home.PNG",
      "assets/B-show.PNG",
      "assets/B-all.PNG",
      "assets/B-create.PNG",
      "assets/B-single.PNG",
    ],
  },
  {
    name: "Netflex Clone",
    description: [
      " Retrieve and display movie from TMDB API ",
      "Display in columns by genre ",
      " The background of the banner changes when refresh",
      "  When you click on a movie card, it will show details about that movie.",
    ],
    techStack: [
      "Html",
      "Css",
      "Ls",
      "Movie-trailer",
      "React",
      "TMDB API",
      "React Youtube",
    ],

    liveSite: "https://a-movie-site.netlify.app/",
    github: "https://github.com/Ahmad-jama/full-netflix-clone",
    images: [
      "assets/N-home.PNG",
      "assets/N-login.PNG",
      "assets/N-start.PNG",
      "assets/N-show.PNG",
      "assets/N-single.PNG",
    ],
  },
];

projectsData.forEach((project) => {
  projectsContainer.innerHTML += `
 
 
 <div class="projects__row">
 <div class="projects__row-img-cont">

   <div class="carousel_wrapper">
     <div class="carousel">
       <div class="slide one">
         <img src="${project.images[0]}"  loading="lazy"
         />
       </div>
       <div class="slide two">
         <img src="${project.images[1]}" loading="lazy"/>
       </div>
       <div class="slide three">
         <img src="${project.images[2]}"    loading="lazy"/>
       </div>
       <div class="slide four">
         <img src="${project.images[3]}"  loading="lazy"/>
       </div>
       <div class="slide five">
         <img src="${project.images[4]}"    loading="lazy" />
       </div>
     </div>
   </div>

 </div>
 <div class="projects__row-content">
   <h3 class="projects__row-content-title">${project.name}</h3>
   <ul class="projects__row-content-desc">
${project.description.map((item) => "<li>" + item + "<li>").join(" ")}
    </ul>
    <h2 style='margin:2rem 0 1rem' > Stack used <h2>

   <div class='stack'> ${project.techStack
     .map((stack) => "<span>" + stack + "</span>")
     .join(" ")} </div>


<div class='buttons'>

<a
href=${project.liveSite}
target="_blank"
>Live site</a
>

<a
href=${project.github}
target="_blank"
>Github</a
>

</div>


 </div>
</div>

 
 `;
});

// start modal

const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modal p");
const modalClose = document.querySelector(".modal span");

modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

// send email\

window.onload = function () {
  document
    .querySelector(".my-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("default_service", "template_cidbtoi", this).then(
        function () {
          modal.classList.add("open");
          modalMessage.textContent = "your meassage has send successfully ";
        },
        function (error) {
          modal.classList.add("FAILED..." + error);
        }
      );
    });
};

const testArray = ["one", "two", "tree"];

console.log(testArray);

const thenew = testArray.map((t) => t).join(" 3 ");

console.log(thenew);
