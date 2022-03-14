import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage () {
  return (
    <MainLayout>
      <h1>Countact Page</h1>
      <h1 className='title'>
        Ir a <Link href='/'>Inicio</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/Pricing</code>
      </p>
    </MainLayout>

  )
}
