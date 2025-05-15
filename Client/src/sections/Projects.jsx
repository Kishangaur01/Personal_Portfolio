export default function Projects() {
  const projects = [
    {
      title: "Clothique",
      desc: "An AI-powered product recommendation system built using the MERN stack.",
      image: "/images/Project_1.png",
      link: "https://github.com/Kishangaur01/Ecommerce-App",
    },
    {
      title: "Student Portal",
      desc: "ASP.NET MVC project for managing student profiles, results, and dashboards.",
      image: "/images/Project_2.png",
      link: "https://github.com/Kishangaur01/Student-Portal",
    },
    {
      title: "Fake Image Detection using ML",
      desc: "Fake Image Detection Using Image Splicing.",
      image: "/images/fake_image.jpeg",
      link: "https://github.com/Kishangaur01/PixelPatrol",
    },
    // Add more projects here
  ];

  return (
      <section className="py-20 px-6  min-h-screen">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 border border-white/10"
            />
            <h3 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-white mb-4">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-indigo-100 transition duration-200"
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
