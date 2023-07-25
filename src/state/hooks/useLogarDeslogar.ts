import { useSetRecoilState } from "recoil"
import { logado } from "state/atom"

export default function useLogarDeslogar() {
    const token = sessionStorage.getItem('token')
    const logarDeslogar = useSetRecoilState(logado)

    return () => {
        if (token === null) {
            logarDeslogar(false)
        } else if (token !== null) {
            logarDeslogar(true)
        }

    }
}