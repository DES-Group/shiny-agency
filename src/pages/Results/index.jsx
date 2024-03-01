import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

export function Results() {
  const { answers } = useContext(SurveyContext)
  console.log(answers)

  return (
    <div>
      <h1>Résultats</h1>
    </div>
  )
}
