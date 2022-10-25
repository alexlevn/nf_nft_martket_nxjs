/* eslint-disable @next/next/no-img-element */
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const MATCH_1 = {
  teams: [
    {
      name: 'QUA',
      image: 'qatar.png',
    },
    {
      name: 'ECU',
      image: 'ecuador.png',
    },
  ],
  schedule: {
    date: '20/11',
    time: '23:00',
  },
}

const MATCH_2 = {
  teams: [
    {
      name: 'SEN',
      image: 'senegal.png',
    },
    {
      name: 'NED',
      image: 'netherlands.png',
    },
  ],
  schedule: {
    date: '20/11',
    time: '20:00',
  },
}

const MATCH_3 = {
  teams: [
    {
      name: 'ENG',
      image: 'england.png',
    },
    {
      name: 'IRN',
      image: 'iran.png',
    },
  ],
  schedule: {
    date: '20/11',
    time: '20:00',
  },
}

const MATCH_4 = {
  teams: [
    {
      name: 'USA',
      image: 'united_states.png',
    },
    {
      name: 'WAL',
      image: 'wales.png',
    },
  ],
  schedule: {
    date: '20/11',
    time: '20:00',
  },
}

const TeamIcon = ({
  imageName,
  shortName,
}: {
  imageName: string
  shortName: string
}) => (
  <div className="flex gap-3 items-center text-xs">
    <img src={`/images/flags/${imageName}`} alt="" className="w-4" />
    <span className="text-white font-semibold">{shortName}</span>
  </div>
)

const MatchTime = ({ d, h }: { d: string; h: string }) => {
  return (
    <div className="flex flex-col gap-2  pl-5 border-l border-gray-700 text-xs">
      <span>{d}</span>
      <span>{h}</span>
    </div>
  )
}

const MatchInfo = ({ match }: { match: any }) => (
  <div className="flex gap-2 items-center  justify-between text-xs">
    {/* LEFT */}
    <div className="flex flex-col gap-2">
      <TeamIcon
        shortName={match.teams[0].name}
        imageName={match.teams[0].image}
      />
      <TeamIcon
        shortName={match.teams[1].name}
        imageName={match.teams[1].image}
      />
    </div>
    {/* RIGHT */}

    <MatchTime d={match.schedule.date} h={match.schedule.time} />
  </div>
)

const MatchSchedule = () => {
  return (
    <div className="flex flex-col gap-5 p-5 lg:p-8  justify-between  bg-pcgray rounded-md">
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold">Match Schedule</p>
        <p className="text-content">Match day 1 of 3</p>

        {/* Match schedule - content */}
        <p className="text-content my-3">Group A</p>
        <div className="flex flex-col gap-4">
          <MatchInfo match={MATCH_1} />
          <MatchInfo match={MATCH_2} />
        </div>

        <p className="text-content my-3">Group B</p>
        <div className="flex flex-col gap-4">
          <MatchInfo match={MATCH_3} />
          <MatchInfo match={MATCH_4} />
        </div>
      </div>
      {/* table-footer */}
      <div className="flex flex-row gap-2">
        <div className="box-pagination text-white">
          <img src="/images/arrow_left.svg" alt="" />
        </div>
        <ButtonBorderGradient className="px-4 py-4">
          <span>
            <img src="/images/arrow_right.svg" alt="" />
          </span>
        </ButtonBorderGradient>
      </div>
    </div>
  )
}

export default MatchSchedule
