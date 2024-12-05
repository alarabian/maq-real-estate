import About from '@/components/about/About'
import PageCover from '@/components/common/page-cover/PageCover'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title={"About"} />
      <About />
    </>
  )
}

export default page