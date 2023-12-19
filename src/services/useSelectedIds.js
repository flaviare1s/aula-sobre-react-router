import { ApiUrl } from "../constants"

export const useSelectedIds = () => {
    const SelectedIds = (id) => {
        fetch(`${ApiUrl}/selecionadas`, {
            method: 'POST',
            body: JSON.stringify({userId: id})
        }) 
        console.log(user.id)
    }

    return { SelectedIds }
}


