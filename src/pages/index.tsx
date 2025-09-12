import Heading from "@/components/Heading"
import { TimerIcon } from "lucide-react";

export default function Home() {
  return (
    <main >
      <Heading>
        Olá
        <button>
          <TimerIcon/>
        </button>
      </Heading>
        <p  className="text-base">
          Seções de texto fictício preenchidas com lorem ipsum divertido tornam mais fácil trocar uma versão de página da web, carta ou e-mail por outra. Por exemplo, em uma campanha de e-mail em massa do Mailchimp, envie essas várias versões durante testes A/B para descobrir qual chamada para ação gera a resposta desejada.
          Além disso, o texto de espaço reservado se destaca quando visualizado, garantindo que você substitua os parágrafos corretos antes de atualizar e reemitir atrações anteriores. Seu gerador de lorem ipsum também pode fornecer várias versões de uma seção de texto em uma única página ao redor da mensagem de teste real.
        </p>
      
    </main>
  );
}
