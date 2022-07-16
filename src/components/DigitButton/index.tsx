import {ACTIONS} from '../Calculator';
import * as Styled from './styled'

function DigitButton({dispatch, digit}: any){
  return(
    <Styled.Button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</Styled.Button>
  )
}

export default DigitButton;