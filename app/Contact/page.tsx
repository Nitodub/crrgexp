
import AnimatedCounter from "@/components/AnimatedCounter"
import CookieTut from "@/components/CookieTut"

const Contact = async () => {
    return (
      <div>
        <h1 className="animate-pulse">This is the Photo Experiment Page</h1>
        <div className="border-2 borger-crrg text-4xl p-5 w-fit">
          <AnimatedCounter from={0} to={300} />
        </div>
        <CookieTut />
      </div>
    );
}

export default Contact

