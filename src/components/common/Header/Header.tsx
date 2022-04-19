import React, { useEffect, useState } from 'react'

type List = {
  id: number
  name: string
  job: string
}

export const Header = () => {
  const [list, setList] = useState<List[] | null>(null)
  console.log(list)

  const fetchListData = async (setList: any) => {
    const res = await fetch('/user')
    const listData = await res.json()
    setList(listData)
  }

  useEffect(() => {
    fetchListData(setList)
  }, [])

  console.log(list)
  return (
    <>
      <header>Headerrr</header>
      <ul>{list && list.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </>
  )
}
