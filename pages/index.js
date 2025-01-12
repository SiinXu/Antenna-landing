import dynamic from 'next/dynamic'

const BusinessLayout = dynamic(() => import('../index').then(mod => {
  const { LayoutIndex } = mod
  return LayoutIndex
}), {
  ssr: false
})

export default function HomePage() {
  return <BusinessLayout />
}

HomePage.getInitialProps = async () => {
  return {
    props: {}
  }
}
