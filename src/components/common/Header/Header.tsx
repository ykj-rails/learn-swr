import React, { useEffect, useState } from 'react'

type List = {
  name: string
  job: string
  age: number
}

export const Header = () => {
  const [list, setList] = useState<List[] | null>(null)
  console.log(list)

  const fetchListData = async (setList: any) => {
    const res = await fetch('/list')
    const listData = await res.json()
    setList(listData)
  }

  useEffect(() => {
    fetchListData(setList)
  }, [])

  console.log(list)
  return (
    <>
      <header>Header</header>
      <ul>
        {list && list.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </>
  )
}
