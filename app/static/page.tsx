import supabase from '../../utils/supabase'

export default async function Items() {
    
  const { data: items } = await supabase.from('items').select('name, condition, grade, quantity, buy_price, link')

  if (!items) {
    return <p>No Items in Inventory. SOMETHING IS WRONG SANG</p>
  }

  return items.map((i, n) => (
      <tr key={"item" + n} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {i.name}
          </th>
          <td className="px-6 py-4">
              {i.condition}
          </td>
          <td className="px-6 py-4">
              {i.buy_price}
          </td>
          <td className="px-6 py-4">
              {i.grade ? i.grade : "NA"}
          </td>
          <td className="px-6 py-4">
              {i.quantity}
          </td>
          <td className="px-6 py-4">
              <a href={i.link} target="_blank">TCG PLAYER</a>
          </td>
      </tr>
    )
  )
}