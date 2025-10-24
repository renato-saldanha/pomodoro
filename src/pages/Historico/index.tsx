import Container from "@/components/Container";
import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Heading";
import { TaskModel } from "@/models/TaskModel";
import MainTemplate from "@/templates/MainTemplate";
import { ESTADO_APLICACAO } from "@/utils/Const";
import { dataFormatada, tipoTask } from "@/utils/UteisFuncs";
import { TrashIcon } from "lucide-react";
import React, { useEffect } from "react";

const Historico: React.FC = () => {
  const [stateListaTasks, setStateListaTasks] = React.useState<TaskModel[]>([]);

  useEffect(() => {
    const carregarTasks = () => {
      const estadoSalvo = localStorage.getItem(ESTADO_APLICACAO);
      const estadoConvertido = estadoSalvo ? JSON.parse(estadoSalvo) : null;
      return estadoConvertido ? estadoConvertido.tasks : [];
    }

    setStateListaTasks(carregarTasks());
  }, []);

  return (
    <MainTemplate title="Histórico de Tarefas">
      <Container>
        <Heading>
          <span>Histórico de Tarefas</span>
          <span>
            <CustomButton
              className={`bg-erro border-none`}
              aria-label="Limpar Histórico"
              title="Limpar Histórico"
              icone={<TrashIcon />} />
          </span>
        </Heading>
      </Container>

      <Container>
        {/* Mobile: Cards Layout */}
        <div className="block md:hidden space-y-4 mx-auto max-w-md px-4">
          {stateListaTasks.map((item) => (
            <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-sm ">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-primario">{item.nome}</h3>
                  <p className="text-sm text-gray-400">Duração: {item.duracao}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm ">
                <div className="flex justify-between">
                  <span className="text-gray-400">Data:</span>
                  <span className="text-primario">{item.dataInicio.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-primario"> {item.dataInterrupcao ? 'Interrompida' : item.dataFim ? 'Concluída' : 'Em Andamento'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tipo:</span>
                  <span className="text-primario">{item.tipo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block overflow-x-auto ">
          <table className="mx-auto max-w-md text-center bg-gray-800 border border-gray-700 rounded-lg shadow-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  Tarefa
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  Duração
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  Data
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  Tipo
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {stateListaTasks.map((item) => (
                <tr key={item.id} className="hover:bg-gray-750">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                    {item.nome}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-primario border-b border-gray-700">
                    {item.duracao}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                    {dataFormatada(item.dataInicio)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                    {item.dataInterrupcao ? 'Interrompida' : item.dataFim ? 'Concluída' : 'Em Andamento'}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-primario border-b border-gray-700">
                    {tipoTask(item.tipo)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}

export default Historico;
