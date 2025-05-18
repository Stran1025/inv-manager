type Items = {
    name: string;
    condition: string;
    grade: string | null;
    quantity: number;
    buy_price: number;
    link: string | null;
    market_price: number;
    isSeal: boolean;
    isSlab: boolean;
    created_at: string;
}

import supabase from '../../utils/supabase'

function getType (i: Items) { 
    let type = 'Single'

    if (i.isSeal) { 
        type = 'Seal'
    } else if (i.isSlab) { 
        type = 'Slab'
    }

    return type
}

function getLink (i:Items) {
    if (i.link) { 
        return (
            <a href={i.link} target="_blank">TCG PLAYER</a>
        )
    }
}

async function Inventory() {
    const { data: items } = await supabase.from('items').select('name, condition, grade, quantity, buy_price, link, market_price, isSeal, isSlab, created_at')

    if (!items) {
    return <p>No Items in Inventory. SOMETHING IS WRONG! SANG</p>
    }


    return items.map((i, n) => (
    <tr key={"item" + n} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <td>
            {i.created_at}
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {i.name}
        </td>
        <td className="px-6 py-4">
            {getType(i)}
        </td>
        <td className="px-6 py-4">
            ${i.buy_price}
        </td>
        <td className="px-6 py-4">
            {i.grade ? i.grade : ""}
        </td>
        <td className="px-6 py-4">
            {i.quantity}
        </td>
        <td className="px-6 py-4">
            ${i.market_price}
        </td>
        <td className="px-6 py-4">
            {getLink(i)}
        </td>
    </tr>
    ))
}   

function Table() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* --- HEADER --- */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            In Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Grade
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Market
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Link
                        </th>
                    </tr>
                </thead>
                {/* --- HEADER --- */}
                <tbody>
                    {Inventory()}
                </tbody>
            </table>
        </div>
    )
}

export default function Home() {
  return (
    <div>
      <Table></Table>
    </div>
  );
}