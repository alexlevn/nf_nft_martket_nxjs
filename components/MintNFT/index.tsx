/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { Modal, notification } from 'antd'
import { SESSION_STORAGE, TEAMS_DATA } from 'constants/index'

const MintNFT = () => {
  const { query } = useRouter()
  const { connected, connect, allowance, approve, mint } = useWeb3()

  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingMint, setLoadingMint] = useState(false)
  const [isShowModalShoeNFT, setIsShowModalShoeNFT] = useState(false)
  const [team, setTeam] = useState<any>(TEAMS_DATA[0])

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])

  const onClickApprove = useCallback(async () => {
    setLoadingApprove(true)
    try {
      await approve(callbackApprove)
    } catch (err) {
      setLoadingApprove(false)
      notification.warning({
        message: (
          <div className="text-yellow-200">
            You just declined the approval request in Metamask!
          </div>
        ),
        style: {
          background: '#191D24',
          borderRadius: '12px',
          color: 'yello',
        },
        duration: 6,
        placement: 'top',
      })
    }
  }, [approve, callbackApprove])

  const callbackMint = useCallback((data: any) => {
    const newTeam = TEAMS_DATA.filter((team: any) => team.id === data.itemType)

    sessionStorage.clear()

    setTeam(newTeam[0])

    setLoadingMint(false)
    setIsShowModalShoeNFT(true)
  }, [])

  const onClickMint = useCallback(async () => {
    setLoadingMint(true)
    const ref = sessionStorage.getItem(SESSION_STORAGE.REFERRAL_ADDRESS) || ''

    try {
      await mint(callbackMint, ref)
    } catch (err) {
      setLoadingMint(false)
      notification.warning({
        message: (
          <div className="text-yellow-200">
            You just declined the approval request in Metamask!
          </div>
        ),
        style: {
          background: '#191D24',
          borderRadius: '12px',
          color: 'yello',
        },
        duration: 6,
        placement: 'top',
      })
    }
  }, [mint, callbackMint])

  const renderBtn = useCallback(() => {
    const renderSpinner = () => (
      <Modal
        width={300}
        footer={null}
        closeIcon={null}
        open={loadingApprove || loadingMint}
      >
        <div className="h-64 text-white flex-center">
          <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
        </div>
      </Modal>
    )

    const renderModalShoeNFT = () => (
      <Modal
        width={400}
        footer={null}
        closeIcon={null}
        open={isShowModalShoeNFT}
        onCancel={(_) => {
          setIsShowModalShoeNFT(false)
        }}
        className="bg-transparent"
      >
        <div className="text-white flex-center flex flex-col">
          <ButtonBorderGradient className="cursor-auto">
            <div className="flex-center h-80">
              <img
                // src={`/images/teams/${team.name}.png`}
                src={
                  '/images/teams/' +
                  team.name.replaceAll(' ', '_').toLowerCase() +
                  '.png'
                }
                alt=""
                className="h-60 w-60"
              />
            </div>
            <div className="flex flex-wrap w-full text-base font-light">
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Team</span>
                <span className="text-white">{team.name}</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Rarity</span>
                <span className="text-white">{`${team.rarity}%`}</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Estimate</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-white">{`≈ $${Number(
                  team.estimate,
                ).toLocaleString('de-DE')}`}</span>
              </div>
            </div>
          </ButtonBorderGradient>
        </div>
        <div className="mt-5">
          <ButtonGradient
            onClick={() => {}}
            className="py-3 text-lg cursor-pointer"
          >
            Collect
          </ButtonGradient>
        </div>
        <div className="mt-5">
          <ButtonBorderGradient
            onClick={() => {}}
            className="py-3 text-lg flex-center cursor-pointer"
          >
            <span>View on BSCscan</span>
          </ButtonBorderGradient>
        </div>
      </Modal>
    )

    if (connected()) {
      if (allowance) {
        return (
          <>
            <ButtonGradient onClick={onClickMint} className="py-2 text-base">
              <span>Mint NFT</span>
            </ButtonGradient>
            {renderModalShoeNFT()}
            {renderSpinner()}
          </>
        )
      } else {
        return (
          <>
            <ButtonGradient onClick={onClickApprove} className="py-2 text-base">
              <span>Approve</span>
            </ButtonGradient>
            {renderSpinner()}
          </>
        )
      }
    } else {
      return (
        <ButtonBorderGradient
          className="px-5 py-4 text-center"
          onClick={() => connect()}
        >
          <span>Connect Wallet</span>
        </ButtonBorderGradient>
      )
    }
  }, [
    allowance,
    connect,
    connected,
    onClickApprove,
    onClickMint,
    loadingApprove,
    loadingMint,
    isShowModalShoeNFT,
    team,
  ])

  useEffect(() => {
    if (query.ref) {
      sessionStorage.setItem(
        SESSION_STORAGE.REFERRAL_ADDRESS,
        query.ref.toString(),
      )
    }
  }, [query])

  return (
    <div className="w-full lg:w-5/12 flex flex-col gap-5 px-5 py-3  justify-between">
      <div className="flex flex-col gap-3">
        <p className="text-white font-semibold">Mint Your NFT</p>
        <p className="text-content">
          Mint randomly releases NFT shoes to represent the national team
        </p>
        <div className="flex justify-between">
          <span className="text-content">Minted times: </span>
          <span className="text-white font-semibold text-sm">0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-content">Minted rate: </span>
          <span className="text-white font-semibold text-sm">
            20% Get Tier1
          </span>
        </div>
      </div>

      {renderBtn()}
    </div>
  )
}

export default MintNFT
