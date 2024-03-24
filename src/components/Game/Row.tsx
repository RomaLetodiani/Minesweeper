import Block from './Block'
import { IBlock } from './Interfaces'

const Row = ({ Blocks, row }: { Blocks: IBlock[]; row: number }) => {
  return (
    <div className="flex">
      {Blocks?.map((b, index) => (
        <Block key={index} {...b} row={row} col={index} />
      ))}
    </div>
  )
}

export default Row
