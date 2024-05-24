import { Search } from 'lucide-react'

export function UserList() {
  return (
    <div>

      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input className="bg-transparent flex-1 outline-none" type="text" name="" id="" placeholder="Buscar Participantes..." />
        </div>
      </div>

      <div>
        
      <table className="border border-white/10 rounded-lg">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Codigo</th>
            <th>Participantes</th>
            <th>Data da inscrição</th>
            <th>Data do check-in</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1234</td>
              <td>
                <div>
                  <span>Alessandro Junqueira</span>
                  <span>alecodx@gmail.com</span>
                </div>
              </td>
              <td>7 dias atras</td>
              <td>3 dias atras</td>
              <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
              <td colSpan={3}>Mostrando 10 de 228 itens</td>
              <td colSpan={3}>Pagina 1 de 23</td>
            </tr>
        </tfoot>

      </table>
      </div>

    </div>


  )
}