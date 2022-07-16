import { ACTIONS } from "../Calculator"
import * as Styled from './styled'

export default function OperationButton({ dispatch, operation }: any) {
  return (
    <Styled.Button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </Styled.Button>
  )
}