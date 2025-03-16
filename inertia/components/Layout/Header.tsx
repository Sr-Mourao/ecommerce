import { ButtonDefault } from '../Buttons/Default'
import { router } from '@inertiajs/react'
import { FaUser } from 'react-icons/fa'

export function Header() {
  function redirectTo(path: string) {
    router.visit(path)
  }

  return (
    <>
      <div className="p-4 bg-sand-3 flex justify-between items-center">
        <div>Loja - Sports</div>
        <ButtonDefault
          onClick={() => redirectTo('/admin')}
          variant="primary"
          icon={<FaUser size={15} />}
        >
          Painel Administrativo
        </ButtonDefault>
      </div>
    </>
  )
}
