import { Modal, ModalProps } from 'antd'
import { FunctionComponent, useState } from 'react'

interface IProps extends Omit<ModalProps, 'visible'> {
  renderTrigger: (openModal: () => void) => React.ReactNode
  renderChildren: (closeModal: () => void) => React.ReactNode
}

const ModalTrigger: FunctionComponent<IProps> = ({
  renderTrigger,
  renderChildren,
  onCancel,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false)

  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  const trigger = renderTrigger(openModal)
  const children = renderChildren(closeModal)

  return (
    <>
      {trigger}
      <Modal
        open={visible}
        onCancel={(e) => {
          if (onCancel) {
            onCancel(e)
          }
          setVisible(false)
        }}
        {...restProps}
      >
        {children}
      </Modal>
    </>
  )
}
export default ModalTrigger
