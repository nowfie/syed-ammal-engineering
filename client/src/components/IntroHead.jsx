import Line from './Line'

const IntroHead = () => {
  return (
    <section className="pt-28 pb-8">
        <div className="main">
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <div className="xl:w-1/2">
                  <h1 className="!font-heading text-heading capitalize text-5xl font-medium leading-snug">Introduction Department Of Public Health</h1>
              </div>
              <div className="xl:w-1/2">
                  <p className="paragraph">The program continues to attract students from all ethnic, racial, and cultural backgrounds as they recognize ways that Africana Studies provides them with a forum to examine the intellectual life, the historical experience, and the cultural understanding of one of this country’s largest racial minority groups.            </p>
              </div>
            </div>
            <Line className={'mt-10'}/>
        </div>
    </section>
  )
}

export default IntroHead