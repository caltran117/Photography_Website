function Projects(){
    return(
        <div>
    <h1>Projects</h1>
<div id="projects">
  <section className="projects">
    <header> Code Refactor</header>
    {/* credit: https://res.cloudinary.com/practicaldev/image/fetch/s--L-1erqyX--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k1v5w8l72wy9a7paxowp.png */}
    <a href="https://github.com/caltran117/code-refactor"><img src={require("../images/code refact.png")} alt="cleaning code" /> </a>
  </section>
  <section className="projects">
    <header> Javascript Quiz</header>
    <a href="https://caltran117.github.io/Javascript-Fundamentals-Quiz//"><img src={require("../images/javascript.png")} alt="coding on screen" /></a>
  </section>
  <section className="projects">
    <header> Weather API</header>
    <a href="https://caltran117.github.io/Weather-App/"><img src={require("../images/web api.png")} alt="web api on a cloud" /></a>
  </section>
</div>

        </div>
    )
}
export default Projects