import React from "react";

type HistoricoProps = {
  texto: string | 'Nome'
};

const Historico: React.FC<HistoricoProps> = ({ texto }) => {
  const data = [
    {
      id: 1,
      nome: "Renato",
      email: "2@2.com",
      idade: 12,
      cidade: "Cuiabá",
      status: "Ativo",
      dataCadastro: "12/12/2025"
    }
  ];

  return (
    <div className="w-full">
      {/* Mobile: Cards Layout */}
      <div className="block md:hidden space-y-4 mx-auto max-w-md px-4">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-sm ">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-primario">{item.nome}</h3>
                <p className="text-sm text-gray-400">ID: {item.id}</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                {item.status}
              </span>
            </div>
            
            <div className="space-y-2 text-sm ">
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-primario">{item.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Idade:</span>
                <span className="text-primario">{item.idade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cidade:</span>
                <span className="text-primario">{item.cidade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data:</span>
                <span className="text-primario">{item.dataCadastro}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <button className="w-full px-3 py-2 rounded text-xs bg-red-600 text-white hover:bg-red-700 transition-colors">
                Desativar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Table Layout */}
      <div className="hidden md:block overflow-x-auto ">
        <table className="mx-auto max-w-md text-center bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                {texto}
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Idade
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Cidade
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Data Cadastro
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-750">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                  {item.id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primario border-b border-gray-700">
                  {item.nome}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                  {item.email}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                  {item.idade}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                  {item.cidade}
                </td>
                <td className="px-4 py-4 whitespace-nowrap border-b border-gray-700">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                  {item.dataCadastro}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium border-b border-gray-700">
                  <button className="px-3 py-1 rounded text-xs bg-red-600 text-white hover:bg-red-700 transition-colors">
                    Desativar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historico;
 