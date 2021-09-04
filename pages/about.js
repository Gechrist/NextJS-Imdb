import Layout from '../components/Layout'

const About = () =>{

     return (
    <div className="lg:ml-menu lg:w-main w-full lg:text-2xl pt-32 px-4 lg:pt-44 2xl:text-3xl text-center">
       <p> This is an IMDB clone built with Next.JS and APIs from <a className='hover:font-bold text-yellow-300' href="http://developers.themoviedb.org" rel='noreferrer' target="_blank">themoviedb.org</a> 
        &nbsp;primarily and <a className='hover:font-bold text-yellow-300' href="https://imdb-api.com" rel='noreferrer' target="_blank">imdb-api.com</a>.</p>
    </div>
    )       
}

About.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default About