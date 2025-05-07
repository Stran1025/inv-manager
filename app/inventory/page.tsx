import Header from "../components/Header"



type Items = {
    name: string;
    count: number;
    type: 'Seal' | 'Single' | 'Slab';
    buyPrice: number;
    marketPrice: number;
    link: string
}

const inventory:Array<Items> = [
    {
        name: 'Booster Bundle - Silver Tempest',
        count: 25,
        type: 'Seal',
        buyPrice: 45,
        marketPrice: 60,
        link: 'https://www.tcgplayer.com/product/283396/pokemon-swsh12-silver-tempest-silver-tempest-booster-bundle?Language=English&page=1',
    },
    {
        name: 'Booster Bundle - Twilight Masquerade',
        count: 25,
        type: 'Seal',
        buyPrice: 35,
        marketPrice: 45,
        link: 'https://www.tcgplayer.com/product/543852/pokemon-sv06-twilight-masquerade-twilight-masquerade-booster-bundle?Language=English&page=1',
    }
]

function Table() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* --- HEADER --- */}
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Link
                        </th>
                    </tr>
                </thead>
                {/* --- HEADER --- */}
                <tbody>
                    {inventory.map((i , n) => {
                        return(
                        <tr key={"item" + n} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {i.name}
                            </th>
                            <td className="px-6 py-4">
                                {i.count}
                            </td>
                            <td className="px-6 py-4">
                                {i.marketPrice}
                            </td>
                            <td className="px-6 py-4">
                                <a href={i.link} target="_blank">TCG PLAYER</a>
                            </td>
                        </tr>
    
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Table></Table>
    </div>
  );
}
