/* eslint-disable @next/next/no-img-element */
import { notification } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import CardNft from 'components/Card'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import NFTDetail from 'components/NFTDetail'
import { FC, useState } from 'react'

const CardsListWithBuyButton: FC<{ data: INft[] }> = ({ data }) => {
  const [step, setStep] = useState(1)

  const handleApprove = () => {
    notification.warning({
      message: (
        <div className="text-yellow-500 font-normal">Transaction Pending</div>
      ),
      style: {
        background: '#191D24',
        borderRadius: '12px',
        color: 'yello',
      },
      duration: 6,
    })

    setStep(2)
  }

  const handleBuy = () => {
    notification.success({
      message: (
        <div className="flex flex-col flex-wrap items-start gap-2">
          <span className="text-green-600 font-normal">
            Transaction completed
          </span>
          <span className="text-gradient cursor-pointer">View on BscScan</span>
        </div>
      ),
      style: {
        background: '#191D24',
        borderRadius: '12px',
      },
      duration: 6,
    })

    setStep(3)
  }
  const handleConnectWallet = () => {
    setStep(1)
  }

  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.length > 0 ? (
        data.map((item, index) => (
          <ModalTrigger
            key={index}
            title={
              <div className="text-white panchang text-sm">NFT Details</div>
            }
            width={700}
            footer={null}
            closeIcon={
              <div className="text-white font-sans text-xl font-thin">x</div>
            }
            renderTrigger={(openModal) => (
              <div className="cursor-pointer" onClick={openModal}>
                <CardNft key={index} item={item} />
              </div>
            )}
            renderChildren={(closeModal) => (
              <NFTDetail
                item={item}
                renderAction={() =>
                  step === 1 ? (
                    <ButtonGradient
                      className="py-2 text-base"
                      onClick={handleApprove}
                    >
                      Approve
                    </ButtonGradient>
                  ) : step === 2 ? (
                    <ButtonGradient
                      className="py-2 text-base"
                      onClick={handleBuy}
                    >
                      Buy
                    </ButtonGradient>
                  ) : (
                    <ButtonBorderGradient
                      className="px-5 py-2 text-center"
                      onClick={handleConnectWallet}
                    >
                      Connect Wallet
                    </ButtonBorderGradient>
                  )
                }
              />
            )}
          />
        ))
      ) : (
        <div className="flex-center w-full mt-10">
          <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
        </div>
      )}
    </div>
  )
}

export default CardsListWithBuyButton
