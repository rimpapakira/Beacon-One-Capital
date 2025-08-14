// Testimonials data
const testimonials = [
  {
    text: "I was planning on doing a DIY project at home since I had more time now oclays and didn’t want people visiting my home for health concerns. C-Line experts ordered the materials, walked my step by step on what to do. whenever i got stuck, i just did the Quick call and an expert helped me solve that issue in minutes! I saved $2400 on my project and learned a new skill!",
    author: "Rita Brown",
    role: "VP Marketing at Excol",
  },
  {
    text: "Working with Beacon One Capital has been a game-changer. Their dedication to community growth and sustainable projects is unmatched. They truly care about transforming spaces into thriving hubs.",
    author: "James Carter",
    role: "Real Estate Developer",
  },
  {
    text: "Beacon One Capital not only invests but revitalizes entire neighborhoods. Their vision turned an underutilized area into a vibrant commercial center that benefits everyone involved.",
    author: "Linda Martinez",
    role: "Community Planner",
  },
  {
    text: "The team at Beacon One Capital is knowledgeable, professional, and responsive. Their expertise helped me maximize the value of my property with ease and confidence.",
    author: "Samuel Lee",
    role: "Individual Investor",
  },
  {
    text: "I appreciate Beacon One Capital’s hands-on approach. They work closely with local contractors and businesses, truly making a difference and fostering long-term growth.",
    author: "Emily Nguyen",
    role: "Business Owner",
  },
];

const testimonialTextEl = document.getElementById("testimonialText");
const testimonialAuthorEl = document.getElementById("testimonialAuthor");
const testimonialRoleEl = document.getElementById("testimonialRole");
const avatars = document.querySelectorAll(".testimonial-avatar");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

let currentTestimonial = 0;

// Function to update testimonial content
function updateTestimonial(index) {
  const testimonial = testimonials[index];
  testimonialTextEl.textContent = testimonial.text;
  testimonialAuthorEl.textContent = testimonial.author;
  testimonialRoleEl.textContent = testimonial.role;

  // Update avatar styles and aria-selected
  avatars.forEach((avatar, idx) => {
    if (idx === index) {
      avatar.classList.add("active");
      avatar.setAttribute("aria-selected", "true");
    } else {
      avatar.classList.remove("active");
      avatar.setAttribute("aria-selected", "false");
    }
  });
}

// Avatar click handler
avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    const index = parseInt(avatar.getAttribute("data-index"));
    currentTestimonial = index;
    updateTestimonial(currentTestimonial);
  });
  avatar.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      avatar.click();
    }
  });
});

// Prev button click handler
prevBtn.addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentTestimonial);
});

// Next button click handler
nextBtn.addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial(currentTestimonial);
});

// Initialize
updateTestimonial(currentTestimonial);
