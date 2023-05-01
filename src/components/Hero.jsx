import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/sisodiajatin", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
         Summarize Articles with <br className="max-md:hidden" /> 
         <span className="orange_gradient">OPENAI GPT</span> 
      </h1>
      <h2 className="desc">
        Simplify your reading with AI-Summarizer, an open-source article summarizer
      </h2>
    </header>
  )
}

export default Hero