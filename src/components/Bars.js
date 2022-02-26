import React, { useState, useEffect } from 'react'
import './Bars.css'

function ListBlocks({ blocks, compare, sorted, swap }) {
  const [width, setWidth] = useState(
    Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5)
  )
  const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent'

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(50, Math.ceil(window.innerWidth / blocks.length) - 8))
    }

    window.addEventListener('resize', handleResize)

    setWidth(Math.min(50, Math.ceil(window.innerWidth / blocks.length) - 8))
  }, [blocks.length])

  return (
    <div className='listBlocks'>
      {blocks.map((block, idx) => {
        const height = (block * 500) / blocks.length
        let bg = 'rgb(197 191 191 / 87%)'

        // i th element is being compared with the other element
        if (compare && (idx === compare[0] || idx === compare[1])) {
          bg = '#ffd54f'
        }

        if (swap && (idx === swap[0] || idx === swap[1])) {
          bg = '#f06292'
        }
        // i th element is in sorted position
        if (sorted && sorted.includes(idx)) {
          bg = '#338a3e'
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: height,
          width: width,
          
        }
        return (
          <div key={idx} className='block' style={style}>
            {block}
          </div>
        )
      })}
    </div>
  )
}

export default ListBlocks
