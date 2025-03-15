'use client'
import fastHelmet from '@/public/images/2024/FastHelmet9.png'
import mapIreland from '@/public/images/2024/MapIreland.jpg'
import santy from '@/public/images/2024/santa.jpg'
import petePresentation from '@/public/images/2024/Petes30th.png'
import {tripData} from '@/data/tridData'
import {newTrips} from '@/data/tridData'
import {visitedPics} from '@/data/tridData'
import { annualPics } from '@/data/tridData'
import Image from 'next/image'
import { motion } from "framer-motion"

const Annual2024 = () => {
    return (
      <div className="w-full bg-black text-white">
        <motion.section
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="w-full"
        >
          <Image
            className="w-full"
            src={fastHelmet}
            alt="Helmet with decorations"
          />
        </motion.section>
        <motion.section
          className="w-full"
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 0.75, duration: 1.5 }}
        >
          <Image
            className="w-[90%] mx-auto rounded-lg border-crrg border-2"
            src={mapIreland}
            alt="Map of Ireland"
          />
        </motion.section>
        <section className="w-full mt-10">
          <h1 className="text-white font-semibold text-4xl text-center">
            Trips Taken in 2024
          </h1>
          <ul className="w-[90%] mx-auto mt-10 text-center text-crrg text-3xl">
            {tripData.map(trip => (
              <div key={trip.id} className="list-none px-4 py-2">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.15 }}
                >
                  {trip.description}
                </motion.li>
              </div>
            ))}
          </ul>
        </section>
        <section className="w-full">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-[80%] mx-auto mt-12 text-white text-3xl"
          >
            Looking back over that list, we really did get some great weather
            for a good few of the spins! In particular, the Sliabh Gullian spin
            – one of my favourites -was on a roasting hot September day. We had
            more fab weather for the Wellington Tower trip (on the borders of
            Kilkenny and Tipperary) and also the Meelick Weir spin, just past
            Banagher, to name just a few. So, all in all, it was a pretty good
            year with 27 spins completed up to the start of November as well as
            many, many midweek coffee meets. We even managed to still find some
            new venues – e.g. Wellington Tower Monument, Athgowle Church,
            Killann Church and Meelick Weir to name a few. But it’s good to
            re-visit some of our old haunts like Fore Abbey, Dromod Railway
            Museum, Corlea Bog and Kells Priory etc even if it’s just for the
            great roads. But some of the newer members may not have been there
            so it’s good to show them the places too.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-[80%] mx-auto mt-12 text-white text-3xl"
          >
            We have now completed 397 rideouts since 2009. Even putting a very
            conservative average mileage of 100 miles per spin, that’s almost
            40,000 miles !!! Unfortunately, we have seen quite a few members
            drop out of the group over the past 15 years, for various reasons.
            But we still have around 25 members plus 3 pillion riders. There’s
            the “backbone” of 5 or 6 who go out on practically every spin,
            others not quite so regularly and about 10 who, for work/family or
            other commitments, only manage a handful of spins per year. But
            sometimes a small group can be more enjoyable as it’s easier to keep
            together on a rideout and there’s usually no need to book venues for
            smaller numbers.
          </motion.p>
          <h1 className="text-rose-400 text-center text-2xl mt-10">
            SEE PHOTOS OF SOME OF THE VENUES VISITED IN 2024 AT THE END OF THE
            REVIEW
          </h1>
        </section>
        <section>
          <h1 className="text-white font-semibold text-4xl text-center mt-10">
            CRRG MILESTONES
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg text-center text-3xl mt-8"
          >
            Mick finally joined the ranks of the CRRG “Centurians”, reaching 100
            Rideouts with the CRRG
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg text-center text-3xl mt-8 px-10"
          >
            Peter wasn’t long reaching the first CRRG patch award – 30 Rideouts
            – after only joining the group late in 2023. He is one of our
            “regular riders” and is already in the hunt for his next patch (if
            only he can get someone to sew them on for him!!!).
          </motion.p>
          <Image
            src={petePresentation}
            alt="Petes Presentation for 30th rideout"
            className="w-[85%] mx-auto mt-10 rounded-xl"
          />
        </section>
        <section>
          <h1 className="text-white font-semibold text-4xl text-center mt-10">
            New and Return Riders
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg mx-auto mt-10 w-[80%] text-3xl"
          >
            It was great to see JR’s son, George, join us on the spin to Dromod
            Railway Museum. I think that he enjoyed it and hopefully he’ll find
            the time to come out with us again in 2025.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg mx-auto mt-10 w-[80%] text-3xl"
          >
            Making a welcome return after a tough year personally was our
            longest serving (and only remaining!) Italian member (he joined in
            2016), Claudio. Complete with pipe and Old Holburn tobacco! He now
            rides a brand new KTM 890 which seems to suit him perfectly and is
            certainly not lacking in power
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg mx-auto mt-10 w-[80%] text-3xl"
          >
            Also back for one spin this year was the other Alan – “Ali G” . !!!
            And he was also on a brand new KTM – a lovely 1290 SA. He enjoyed
            the day at Derryglad Folk Museum. Let’s hope that his job doesn’t
            interfere too much with his biking next year and that he can manage
            a few more spins with us in 2025.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-crrg mx-auto mt-10 w-[80%] text-3xl"
          >
            Finally, we hope to have another new member for 2025. Unfortunately,
            we only met Paul T for a few minutes in Clonee on our very last spin
            and, between the weather and Christmas upon us, we haven’t had a
            chance to meet up again. But he seems interested in what we do and
            keen to join the group so hopefully we will be meeting up again
            soon.
          </motion.p>
        </section>
        <section>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-white font-semibold text-4xl text-center mt-10"
          >
            Trips Planned for 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-white text-center mt-10 text-3xl"
          >
            Just some places in Ireland we missed out on so far and which we
            hope to visit in 2025:
          </motion.p>

          <ul className="mt-10 pb-8">
            {newTrips.map((newTrip) => (
              <motion.li
                key={newTrip.id}
                className={`text-3xl text-center mt-2 pb-2 ${
                  newTrip.id === 1
                    ? "text-crrg"
                    : newTrip.id === 10
                    ? "text-crrg"
                    : "text-white"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.15 }}
              >
                {newTrip.description}
              </motion.li>
            ))}
          </ul>
        </section>
        <section>
          {/* Gallery 1 */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {annualPics.map((pic) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.15 }}
                className="mx-auto p-1 sm:max-w-[90%] md:max-w-[45%] lg:max-w-[45%] max-w-[50%] min-w-[450px] rounded-lg border-crrg border"
              >
                <Image key={pic.id} src={pic.loc} alt="Nice annual picture" />
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-white text-center text-3xl mt-10 mb-5">
            Notes and Info
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-red-700 text-2xl mx-auto w-4/5 mt-5"
          >
            Please always try to reply to messages about proposed spins as soon
            as possible. A lot of effort and planning goes into the rideouts –
            checking routes, booking breakfast, booking venues etc. And it just
            takes seconds to reply...!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-red-700 text-2xl mx-auto w-4/5 mt-5"
          >
            When on rideouts, look out for your fellow riders. Keep checking
            your mirrors and make sure that they are following you, especially
            when turning off main roads
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-red-700 text-2xl mx-auto w-4/5 mt-5"
          >
            Suggestions for new venues are always welcome. We have visited well
            over 200 venues and it’s getting more difficult to find places
            within a day’s return trip
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-red-700 text-2xl mx-auto w-4/5 mt-5"
          >
            Consider investing in a helmet headset. It can be very handy for
            contact if a rider(s) gets separated from the group. (The Lexin ones
            on Aliexpress are quite good and inexpensive)
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-purple-500 text-3xl italic mx-auto w-4/5 mt-5"
          >
            Wishing all CRRG members and families a very
            <span className="text-red-500">Happy Christmas</span>, a great year
            in 2025 and safe riding
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <Image
              src={santy}
              alt="Santa Clause on Sleigh"
              className="w-[80%] mx-auto mt-10"
            />
          </motion.div>
        </section>
        <section>
          {/* Venues Visited Section with Photos */}

          <h1 className="text-white text-3xl text-center mt-20 mb-10">
            Venues Visited
          </h1>
          <div className="flex flex-wrap gap-2 items-center justify-around">
            {visitedPics.map((visit) => (
              <motion.div
                key={visit.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.15 }}
                className="sm:min-w-[90%] md:min-w-[350px] lg:min-w-[500px]"
              >
                <Image
                  src={visit.loc}
                  alt="Visited Place Picture"
                  className="w-full rounded-xl"
                />
                <h1 className="test-white text-2xl text-center mt-2">
                  {visit.desc}
                </h1>
              </motion.div>
            ))}
          </div>
          <h1 className="text-purple-600 text-4xl text-center pb-10 pt-10 italic">
            Thanks to all those who supplied their photos to me after each
            rideout during the year - Much appreciated.
          </h1>
        </section>
      </div>
    );
}

export default Annual2024