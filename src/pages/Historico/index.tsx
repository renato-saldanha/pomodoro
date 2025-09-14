import React from "react";

import { Play } from "lucide-react";

import Contador from "@/components/Contador";
import Task from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

type HistoricoProps = {

};

const Historico : React.FC<HistoricoProps> = () => {
    return (
         <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Idade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Cidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Data Cadastro
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">           
            <tr key={1} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                {1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b">
                Renato
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                2@2.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                12
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                Cuiabá
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800`}>
                    Ativo
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                12/12/1212
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-b">
                <button
                className={`px-3 py-1 rounded text-xs 'bg-red-600 text-white hover:bg-erro`}>
                    Desativar
                </button>
            </td>
            </tr>            
          </tbody>
        </table>
      </div>   
    )
}

export default Historico;
 