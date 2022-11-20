import { Carousel } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import TierDetail from 'components/TierDetail'
import { ITeamInfo } from 'components/TierDetail/interface'
import { useEffect, useState } from 'react'

const TiersList = () => {
  const [arrTeams, setArrTeams] = useState<ITeamInfo[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/teams')
      const data: ITeamInfo[] = getResponseData(res)

      setArrTeams(data)
    }

    fetchData()
  }, [])

  console.log('arrTeams: ', arrTeams);
  
  return (
    <>
      <div className="block lg:hidden">
        <Carousel>
          {[1, 2, 3, 4].map((tier, index) => {
            return (
              <TierDetail
                key={index}
                dataSource={arrTeams.filter((item) => item.tier === tier)}
                tier={tier}
              />
            )
          })}
        </Carousel>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail
          tier={1}
          dataSource={arrTeams.filter((item) => item.tier === 1)}
        />
        <TierDetail
          tier={2}
          dataSource={arrTeams.filter((item) => item.tier === 2)}
        />
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail
          tier={3}
          dataSource={arrTeams.filter((item) => item.tier === 3)}
        />
        <TierDetail
          tier={4}
          dataSource={arrTeams.filter((item) => item.tier === 4)}
        />
      </div>
    </>
  )
}

export default TiersList
