import {Button} from './style'

function DefaultButton({children,...props}){

    return(
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton