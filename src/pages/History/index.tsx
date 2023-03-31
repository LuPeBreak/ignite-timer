import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa1</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa2</td>
              <td>20 minutos</td>
              <td>Há 4 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa3</td>
              <td>20 minutos</td>
              <td>Há 12 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa4</td>
              <td>20 minutos</td>
              <td>Há 3 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
