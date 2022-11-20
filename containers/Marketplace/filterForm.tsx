/* eslint-disable @next/next/no-img-element */
import { Checkbox, InputNumber } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { getFlagImageUrl } from 'components/TierDetail'
import { ITeamInfo } from 'components/TierDetail/interface'
import { useState } from 'react'

const TIERS = [
  {
    id: 1,
    name: 'Tier 1',
  },
  {
    id: 2,
    name: 'Tier 2',
  },
  {
    id: 3,
    name: 'Tier 3',
  },
  {
    id: 4,
    name: 'Tier 4',
  },
]

const FilterForm: React.FC<{
  onSubmit?: (values: number[]) => void
}> = ({ onSubmit }) => {
  const [selectedTeams, setSelectedTeams] = useState<number[]>([])
  const [selectedTier, setSelectedTier] = useState(1)

  // console.log('selectedTeams: ', selectedTeams)

  return (
    <div className="flex flex-col gap-5 px-5 py-5">
      {/* Price */}
      <div className="flex flex-col gap-2">
        <span className="text-sm text-white">Price</span>
        <div className="flex gap-5 items-center">
          <InputNumber
            onChange={() => {}}
            controls={false}
            placeholder="Min"
            className="w-full bg-pcdark rounded-lg text-white border border-scgray_4"
          />{' '}
          <span className="text-scgray">to</span>{' '}
          <InputNumber
            controls={false}
            onChange={() => {}}
            placeholder="Max"
            className="w-full bg-pcdark rounded-lg text-white border border-scgray_4"
          />
        </div>
      </div>

      {/* SELECT TEAMS */}
      <div className="flex flex-col gap-2">
        <span className="text-sm text-white">National Team</span>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Tiers */}
          <div className="flex flex-wrap w-full lg:w-1/3 gap-0 lg:gap-2 cursor-pointer">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className="w-1/2 lg:w-full flex justify-between pr-3"
                onClick={() => setSelectedTier(tier.id)}
              >
                <span
                  className={
                    selectedTier === tier.id ? 'text-gradient' : 'text-white'
                  }
                >
                  {tier.name}
                </span>
                <span
                  className={
                    selectedTier === tier.id ? 'text-gradient' : 'text-white'
                  }
                >
                  (
                  {
                    arrTeams
                      .filter((item) => item.tier === tier.id)
                      .filter((item) => selectedTeams.includes(item.id)).length
                  }
                  )
                </span>
              </div>
            ))}
          </div>

          {/* Teams */}
          <div className="flex flex-col gap-3 flex-wrap w-full lg:w-2/3 text-white  px-0 lg:pl-10">
            {/* arrTeams with selected tier  */}
            {arrTeams
              .filter((item) => item.tier === selectedTier)
              .map((team, index) => (
                <SelectTeam
                  key={index}
                  info={team as ITeamInfo}
                  selected={selectedTeams.includes(team.id)}
                  onChange={(target) => {
                    // console.log('target = ', target)
                    if (target.isChecked) {
                      // setSelectedTeams and unique
                      setSelectedTeams(
                        Array.from(
                          new Set(selectedTeams.concat(team.id as number)),
                        ),
                      )
                    } else {
                      setSelectedTeams(
                        selectedTeams.filter((item) => item !== team.id),
                      )
                    }
                  }}
                />
              ))}
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex  gap-5">
        <div className="w-1/3 pt-1">
          <ButtonBorderGradient
            className="w-full px-5 py-2 text-center"
            onClick={() => {
              setSelectedTeams([])
            }}
          >
            Reset
          </ButtonBorderGradient>
        </div>
        <div className="w-2/3">
          <ButtonGradient
            className="w-full py-2"
            onClick={() => onSubmit && onSubmit(selectedTeams)}
          >
            Apply
          </ButtonGradient>
        </div>
      </div>
    </div>
  )
}

const SelectTeam: React.FC<{
  info: ITeamInfo
  selected?: boolean
  onChange?: (target: { id: number; isChecked: boolean }) => void
}> = ({ info, selected, onChange }) => (
  <div className="w-full flex justify-between items-center ">
    {/* TEAM */}
    <div className="flex gap-3 items-center text-sm">
      <img
        // TODO: ITeamInfo need imagePath
        src={getFlagImageUrl(info.name)}
        alt=""
        className="w-5"
      />
      <div className="flex flex-col">
        <span className="text-white font-semibold">{info.name}</span>
      </div>
    </div>

    {/* INFO */}
    <div className="text-xs text-right">
      <Checkbox
        checked={selected}
        onChange={(e) =>
          onChange && onChange({ id: info.id, isChecked: e.target.checked })
        }
      />
    </div>
  </div>
)

export default FilterForm

// Get from BE
const arrTeams = [
  {
    id: 1,
    tier: 1,
    tokenType: 1,
    name: 'Brazil',
    fifaCode: 'BRA',
    group: 'G',
    rarity: 0.08,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 2,
    tier: 1,
    tokenType: 2,
    name: 'France',
    fifaCode: 'FRA',
    group: 'D',
    rarity: 0.1,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 3,
    tier: 1,
    tokenType: 3,
    name: 'England',
    fifaCode: 'ENG',
    group: 'B',
    rarity: 0.11,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 4,
    tier: 1,
    tokenType: 4,
    name: 'Spain',
    fifaCode: 'ESP',
    group: 'E',
    rarity: 0.14,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 5,
    tier: 1,
    tokenType: 5,
    name: 'Germany',
    fifaCode: 'GER',
    group: 'E',
    rarity: 0.19,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 6,
    tier: 1,
    tokenType: 6,
    name: 'Argentina',
    fifaCode: 'ARG',
    group: 'C',
    rarity: 0.19,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 7,
    tier: 1,
    tokenType: 7,
    name: 'Belgium',
    fifaCode: 'BEL',
    group: 'F',
    rarity: 0.22,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 8,
    tier: 1,
    tokenType: 8,
    name: 'Portugal',
    fifaCode: 'POR',
    group: 'H',
    rarity: 0.22,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 9,
    tier: 2,
    tokenType: 9,
    name: 'Nederland',
    fifaCode: 'NL',
    group: 'A',
    rarity: 0.26,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 10,
    tier: 2,
    tokenType: 10,
    name: 'Denmark',
    fifaCode: 'DEN',
    group: 'D',
    rarity: 0.52,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 11,
    tier: 2,
    tokenType: 11,
    name: 'Croatia',
    fifaCode: 'CRO',
    group: 'F',
    rarity: 0.65,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 12,
    tier: 2,
    tokenType: 12,
    name: 'Uruguay',
    fifaCode: 'URU',
    group: 'H',
    rarity: 0.93,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 13,
    tier: 2,
    tokenType: 13,
    name: 'Poland',
    fifaCode: 'POL',
    group: 'C',
    rarity: 1.21,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 14,
    tier: 2,
    tokenType: 14,
    name: 'Senegal',
    fifaCode: 'SN',
    group: 'A',
    rarity: 1.21,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 15,
    tier: 2,
    tokenType: 15,
    name: 'America',
    fifaCode: 'USA',
    group: 'B',
    rarity: 1.49,
    totalMinted: '2',
    totalPool: 120,
  },
  {
    id: 16,
    tier: 2,
    tokenType: 16,
    name: 'Serbia',
    fifaCode: 'SRB',
    group: 'G',
    rarity: 1.49,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 17,
    tier: 3,
    tokenType: 17,
    name: 'Switzerland',
    fifaCode: 'SUI',
    group: 'G',
    rarity: 1.49,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 18,
    tier: 3,
    tokenType: 18,
    name: 'Mexico',
    fifaCode: 'MEX',
    group: 'C',
    rarity: 1.86,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 19,
    tier: 3,
    tokenType: 19,
    name: 'Wales',
    fifaCode: 'WAL',
    group: 'B',
    rarity: 1.86,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 20,
    tier: 3,
    tokenType: 20,
    name: 'Ghana',
    fifaCode: 'GHA',
    group: 'H',
    rarity: 2.8,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 21,
    tier: 3,
    tokenType: 21,
    name: 'Ecuador',
    fifaCode: 'ECU',
    group: 'A',
    rarity: 2.8,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 22,
    tier: 3,
    tokenType: 22,
    name: 'Morocco',
    fifaCode: 'MAR',
    group: 'F',
    rarity: 3.73,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 23,
    tier: 3,
    tokenType: 23,
    name: 'Cameroon',
    fifaCode: 'CMR',
    group: 'G',
    rarity: 4.66,
    totalMinted: '2',
    totalPool: 120,
  },
  {
    id: 24,
    tier: 3,
    tokenType: 24,
    name: 'Canada',
    fifaCode: 'CAN',
    group: 'F',
    rarity: 4.66,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 25,
    tier: 4,
    tokenType: 25,
    name: 'Japan',
    fifaCode: 'JPN',
    group: 'E',
    rarity: 4.66,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 26,
    tier: 4,
    tokenType: 26,
    name: 'Qatar',
    fifaCode: 'QAT',
    group: 'A',
    rarity: 4.66,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 27,
    tier: 4,
    tokenType: 27,
    name: 'Tunisia',
    fifaCode: 'TUN',
    group: 'D',
    rarity: 5.59,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 28,
    tier: 4,
    tokenType: 28,
    name: 'South Korea',
    fifaCode: 'KOR',
    group: 'H',
    rarity: 7.46,
    totalMinted: '1',
    totalPool: 60,
  },
  {
    id: 29,
    tier: 4,
    tokenType: 29,
    name: 'Australia',
    fifaCode: 'AUS',
    group: 'D',
    rarity: 7.46,
    totalMinted: '4',
    totalPool: 240,
  },
  {
    id: 30,
    tier: 4,
    tokenType: 30,
    name: 'Iran',
    fifaCode: 'IRN',
    group: 'B',
    rarity: 9.32,
    totalMinted: '2',
    totalPool: 120,
  },
  {
    id: 31,
    tier: 4,
    tokenType: 31,
    name: 'Saudi Arabia',
    fifaCode: 'KSA',
    group: 'C',
    rarity: 9.32,
    totalMinted: 0,
    totalPool: 0,
  },
  {
    id: 32,
    tier: 4,
    tokenType: 32,
    name: 'Costa Rica',
    fifaCode: 'CRC',
    group: 'E',
    rarity: 18.64,
    totalMinted: '1',
    totalPool: 60,
  },
]
