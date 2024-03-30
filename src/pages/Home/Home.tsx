import Mode from '../../components/Home/Mode'
import useMediaQuery from '../../hooks/useMediaQuery'

const Home = () => {
  const isMobile = useMediaQuery('(min-width: 768px)')

  return (
    <div className="bg-slate-950 flex-1 flex justify-center items-center p-5">
      <section className="flex flex-col items-center justify-center md:flex-row gap-12 md:gap-16 m-auto">
        <div className="flex flex-1 justify-center items-center">
          <Mode mode="easy" />
        </div>
        <div className="flex flex-col flex-1 gap-12 md:gap-24 justify-between items-center">
          <Mode mode="amateur" />
          <Mode mode={isMobile ? 'random' : 'expert'} />
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Mode mode={!isMobile ? 'random' : 'expert'} />
        </div>
      </section>
    </div>
  )
}

export default Home
