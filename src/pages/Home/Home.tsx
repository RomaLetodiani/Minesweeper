import Mode from '../../components/Home/Mode'

const Home = () => {
  return (
    <div className="bg-slate-800 flex-1 flex justify-center items-center">
      <section className="flex flex-col items-center justify-center md:flex-row gap-10 m-auto">
        <div className="flex flex-1 justify-center items-center">
          <Mode mode="easy" />
        </div>
        <div className="flex flex-col flex-1 gap-10 justify-between items-center">
          <Mode mode="intermediate" />
          <Mode mode="expert" />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Mode mode="random" />
        </div>
      </section>
    </div>
  )
}

export default Home
