import {
  Target,
  Lightbulb,
  FileText,
  TrendingUp,
  BarChart3,
  Link2,
  ArrowRight,
  Clock,
  GraduationCap,
  Video,
  Wrench,
  Zap,
  Bot,
  Workflow,
} from "lucide-react";
import logo from "@/assets/logo-shoks.webp";
import type { PropostaConfig } from "../types";

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA (template SHOKS).
 *
 * Tudo que for específico do cliente está marcado com colchetes: [CLIENTE], [VALOR],
 * [DDD][NUMERO]. Substitua todos antes de entregar. O restante é conteúdo de exemplo
 * no tom da SHOKS (inteligência aplicada a operações reais) e deve ser adaptado ao escopo.
 * Os dados dos mockups são fictícios, nunca use dado real de cliente neles.
 */

const FluxoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Fluxo automatizado
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 items-stretch">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center">
        <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-2">Gatilho</p>
        <p className="text-xs text-foreground/70 leading-relaxed">
          &quot;Novo pedido recebido pelo canal de atendimento, com prazo para sexta&quot;
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ArrowRight className="w-5 h-5 text-primary/60" />
      </div>
    </div>
    <div className="mt-4 rounded-xl bg-primary/10 border border-primary/30 p-4">
      <p className="text-[9px] uppercase tracking-widest text-primary mb-2">Executado pela IA</p>
      <div className="space-y-1.5 text-[11px] text-foreground/85">
        <p><span className="text-muted-foreground">Registro:</span> Pedido criado no sistema</p>
        <p><span className="text-muted-foreground">Responsável:</span> Notificado no mesmo minuto</p>
        <p><span className="text-muted-foreground">Próximo passo:</span> Separação até quinta</p>
      </div>
    </div>
  </div>
);

const AgenteMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Agente SHOKS
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 p-3 max-w-[85%]">
        <p className="text-xs text-foreground/75">Qual o prazo padrão para pedidos fora da região?</p>
      </div>
      <div className="rounded-2xl rounded-tr-sm bg-primary/10 border border-primary/30 p-3 max-w-[90%] ml-auto">
        <p className="text-xs text-foreground/90 leading-relaxed">
          O prazo padrão é de 5 dias úteis. Pedidos urgentes entram na fila de prioridade, conforme a
          política vigente. Quer que eu abra o chamado?
        </p>
      </div>
    </div>
  </div>
);

const PainelMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <TrendingUp className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Saúde da operação
      </p>
    </div>
    <div className="space-y-3">
      {[
        { setor: "Atendimento", nota: "92", status: "Em dia", cor: "text-primary" },
        { setor: "Logística", nota: "68", status: "Atenção", cor: "text-foreground/70" },
        { setor: "Financeiro", nota: "24", status: "Risco", cor: "text-destructive/80" },
      ].map((linha) => (
        <div key={linha.setor} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2.5">
          <span className="text-xs text-foreground/80">{linha.setor}</span>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-foreground">{linha.nota}</span>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${linha.cor}`}>{linha.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RelatorioMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <BarChart3 className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Resumo de hoje
      </p>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
        <p className="text-lg font-bold text-foreground">14</p>
        <p className="text-[8px] uppercase tracking-widest text-muted-foreground mt-1">Avançaram</p>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
        <p className="text-lg font-bold text-foreground">5</p>
        <p className="text-[8px] uppercase tracking-widest text-muted-foreground mt-1">Travaram</p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-3 text-center">
        <p className="text-lg font-bold text-primary">3</p>
        <p className="text-[8px] uppercase tracking-widest text-primary/80 mt-1">Críticas</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Clock className="w-3 h-3" />
      <span>Enviado às 8h todo dia</span>
    </div>
  </div>
);

const TreinamentoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <GraduationCap className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Agenda de treinamento
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Treinamento 01 · Sistema</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Mês 2</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Painel de gestão, indicadores e relatório diário
        </p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/90">Treinamento 02 · Agentes de IA</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Pós entrega</span>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          Como usar os agentes e o painel de gestão no dia a dia
        </p>
      </div>
    </div>
    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
      <Video className="w-3 h-3" />
      <span>Sessões gravadas pro time rever</span>
    </div>
  </div>
);

const ManutencaoMockup = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-8">
    <div className="flex items-center gap-2 mb-6">
      <Wrench className="w-4 h-4 text-primary/70" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Changelog do mês
      </p>
    </div>
    <div className="space-y-3">
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Feedback do time</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Aplicado</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Ajuste no texto de resposta do agente para pedidos urgentes
        </p>
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/85">Performance do banco de dados</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Otimizado</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Consulta de histórico mais rápida para o agente responder na hora
        </p>
      </div>
      <div className="rounded-xl bg-primary/10 border border-primary/30 p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium text-foreground/90">Integração com o sistema atual</p>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Atualizada</span>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed">
          API sincronizada com a versão mais recente, sem parar a operação
        </p>
      </div>
    </div>
  </div>
);

export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · [CLIENTE]",
    titulo: "Operações que evoluem",
    tituloDestaque: "com inteligência",
    subtitulo:
      "A SHOKS entra na operação do [CLIENTE], entende como ela funciona e aplica inteligência artificial para torná-la mais eficiente, produtiva e preparada para o futuro.",
    logoSrc: logo,
    logoAlt: "SHOKS",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "PROCESSOS MAIS EFICIENTES",
      "AUTOMAÇÕES INTELIGENTES",
      "EQUIPES MAIS PRODUTIVAS",
      "RESULTADOS REAIS",
      "IA NA OPERAÇÃO",
      "TECNOLOGIA QUE ACELERA PESSOAS",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "Uma operação que cresce, mas ainda depende de esforço manual",
    subtitulo:
      "O [CLIENTE] já entrega resultado. Só que boa parte da rotina ainda roda em tarefas manuais, planilhas e na memória do time.",
    desafio: {
      titulo: "Como é hoje",
      icone: Target,
      items: [
        "O time gasta energia no repetitivo: o que poderia rodar sozinho ainda passa pelas mãos de alguém todo dia.",
        "A informação está espalhada: cada pessoa guarda uma parte do processo e ninguém enxerga a operação inteira.",
        "Decisão sem dado na hora certa: os números chegam tarde e a gestão age depois que o problema já aconteceu.",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: Lightbulb,
      items: [
        "As rotinas repetitivas passam a rodar sozinhas com IA, e o time foca no que exige decisão.",
        "Processos, dados e responsáveis ficam centralizados e visíveis para quem precisa.",
        "A gestão acompanha indicadores em tempo real e age enquanto ainda dá tempo de mudar o resultado.",
      ],
    },
  },

  ecossistema: {
    eyebrow: "A SOLUÇÃO",
    titulo: "Inteligência em cada etapa da operação",
    subtitulo:
      "Tudo é construído sobre as ferramentas que o [CLIENTE] já usa. Nenhum sistema novo para o time aprender do zero.",
    pilares: [
      {
        icone: Zap,
        titulo: "Automações inteligentes",
        descricao: "Fluxos que executam sozinhos as tarefas repetidas da rotina, com IA decidindo onde for preciso.",
      },
      {
        icone: Bot,
        titulo: "Agentes de IA",
        descricao: "Assistentes treinados no seu negócio, que respondem, registram e acompanham a operação o dia todo.",
      },
      {
        icone: Workflow,
        titulo: "Sistemas sob medida",
        descricao: "Painéis e ferramentas internas desenhados para o seu processo, e não o contrário.",
      },
      {
        icone: BarChart3,
        titulo: "Indicadores e relatórios",
        descricao: "Resumo automático do que avançou, travou e precisa de decisão, sem cobrar planilha de ninguém.",
      },
      {
        icone: Link2,
        titulo: "Integração com o que já existe",
        descricao: "Conecta CRM, ERP, WhatsApp e planilhas atuais, sem trocar as ferramentas do time.",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "AUTOMAÇÃO",
        icone: Zap,
        titulo: "Rotinas que rodam sozinhas",
        descricao:
          "Cada gatilho da operação dispara as ações certas, sem depender de lembrete, de planilha ou da memória de alguém.",
        itens: [
          "Registro automático de pedidos, chamados e solicitações",
          "Notificação do responsável na hora, com o contexto completo",
          "Prazos e próximos passos definidos sem intervenção manual",
          "Histórico contínuo de tudo que foi executado",
        ],
        mockup: <FluxoMockup />,
      },
      {
        label: "AGENTE DE IA",
        icone: Bot,
        titulo: "Um agente que conhece o seu negócio",
        descricao:
          "Quem entra no time produz como quem já está há meses. O agente responde antes que a dúvida trave o trabalho.",
        itens: [
          "Responde dúvidas de processo, produto e política na hora",
          "Consulta a base de conhecimento treinada no [CLIENTE]",
          "Abre chamados e registra demandas direto na conversa",
          "Aprende com o feedback do time a cada semana",
        ],
        mockup: <AgenteMockup />,
      },
      {
        label: "PAINEL",
        icone: TrendingUp,
        titulo: "Uma leitura clara de cada área",
        descricao:
          "A gestão passa a agir enquanto o problema ainda é pequeno, e não depois que ele virou prejuízo.",
        itens: [
          "Nota de saúde por área, com critérios definidos junto com o time",
          "Aponta etapas puladas e processos fora do padrão",
          "Sinaliza risco antes de virar atraso",
          "Visão consolidada por responsável e por período",
        ],
        mockup: <PainelMockup />,
      },
      {
        label: "RELATÓRIOS",
        icone: BarChart3,
        titulo: "Gestão em cinco minutos por dia",
        descricao:
          "Resumo diário do que avançou, do que travou e do que precisa de decisão hoje, sem cobrar planilha de ninguém.",
        itens: [
          "Resumo diário: o que avançou, o que travou e o que precisa de decisão",
          "Destaque dos três pontos mais críticos do dia",
          "Fechamento semanal com evolução dos indicadores",
          "Alerta imediato quando algo importante sai do rumo",
        ],
        mockup: <RelatorioMockup />,
      },
      {
        label: "TREINAMENTO",
        icone: GraduationCap,
        titulo: "Dois treinamentos para destravar o time",
        descricao:
          "Depois da ativação, o time recebe dois treinamentos ao vivo: um para dominar o sistema, outro para tirar o máximo dos agentes no dia a dia.",
        itens: [
          "Treinamento 1: uso do sistema e do painel de gestão",
          "Treinamento 2: como tirar o máximo de cada agente",
          "Sessões gravadas, disponíveis para o time rever quando quiser",
          "Espaço aberto para dúvidas depois da virada de chave",
        ],
        mockup: <TreinamentoMockup />,
      },
      {
        label: "MANUTENÇÃO",
        icone: Wrench,
        titulo: "Manutenção pensada para evoluir, não só sustentar",
        descricao:
          "Todo mês o sistema fica mais rápido e mais afiado. A melhoria entra a partir do feedback real do time, e não só quando algo quebra.",
        itens: [
          "Melhoria contínua com base no feedback direto do time",
          "Otimização de velocidade de resposta e do banco de dados",
          "Atualização de APIs e integrações sempre que o [CLIENTE] mudar de ferramenta",
          "Pequenas melhorias e novas funcionalidades dentro do escopo já acordado",
        ],
        mockup: <ManutencaoMockup />,
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM 2 MESES",
    titulo: "Cada etapa entrega algo",
    tituloDestaque: "funcionando e validado pelo time",
    subtitulo:
      "Sem grande virada de chave no fim. Só entrega validada, etapa após etapa.",
    etapas: [
      {
        numero: 1,
        titulo: "Imersão",
        descricao:
          "Duas sessões para mapear a operação real, levantamento técnico das ferramentas atuais e critérios dos indicadores definidos.",
      },
      {
        numero: 2,
        titulo: "Fundação",
        descricao:
          "Base de conhecimento treinada nos processos e políticas do [CLIENTE], com integração completa às ferramentas que ele já usa.",
      },
      {
        numero: 3,
        titulo: "Piloto",
        descricao:
          "Automações e agente liberados para um grupo piloto, com ajustes a partir do uso real.",
      },
      {
        numero: 4,
        titulo: "Painel completo",
        descricao:
          "Indicadores e relatório gerencial diário entram em operação, com painel de gestão liberado.",
      },
      {
        numero: 5,
        titulo: "Ativação",
        descricao:
          "Treinamento ao vivo com o time, liberação para a operação inteira e acompanhamento diário na primeira semana.",
      },
    ],
  },

  investimento: {
    eyebrow: "O CUSTO DE NÃO TER",
    titulo: "Antes e depois da SHOKS na operação",
    subtitulo:
      "A operação do [CLIENTE] antes de ter automação, agentes e indicadores em funcionamento, e depois.",
    cenarioAtual: {
      titulo: "Cenário Atual",
      label: "HOJE",
      destaque: "Operação dependente de esforço manual",
      subtitulo: "Sem visibilidade, sem critério",
      items: [
        "Tarefas repetitivas consomem horas do time todos os dias",
        "A informação vive espalhada em planilhas, conversas e na memória de cada pessoa",
        "Os números chegam tarde, e a decisão vem depois do problema",
      ],
    },
    cenarioFuturo: {
      titulo: "Cenário [CLIENTE]",
      label: "COM A SHOKS",
      destaque: "Operação com inteligência aplicada",
      subtitulo: "Automação, agentes e controle em funcionamento",
      items: [
        "Rotinas repetitivas rodando sozinhas, com registro automático",
        "Agente de IA respondendo dúvidas de processo e política na hora",
        "Indicadores por área, direto no painel de gestão",
        "Relatório gerencial pronto todo dia, sem cobrar planilha de ninguém",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Estrutura comercial",
    planos: [
      {
        eyebrow: "IMPLEMENTAÇÃO",
        nome: "Setup completo",
        descricao:
          "Mapeamento do processo, construção das soluções e ativação assistida, em 2 meses.",
        valor: "R$ [VALOR]",
        periodo: "pagamento único",
        rotuloValor: "implementação completa",
        itens: [
          "Mapeamento do processo e construção das automações e agentes",
          "Base de conhecimento treinada nos processos e políticas do cliente",
          "Integração completa com as ferramentas que o cliente já usa",
          "Painel de gestão com indicadores por área",
          "2 treinamentos ao vivo: uso do sistema e uso dos agentes",
          "Ativação assistida com acompanhamento diário na primeira semana",
        ],
        observacao:
          "Requer acesso às ferramentas atuais, documentação dos processos vigentes e cerca de 2h do time nas duas primeiras semanas.",
      },
      {
        eyebrow: "MANUTENÇÃO",
        nome: "Manutenção Mensal",
        descricao:
          "Tudo que mantém as soluções rodando, evoluindo e sempre atualizadas.",
        valor: "R$ [VALOR]",
        periodo: "/mês",
        rotuloValor: "mensalidade fixa",
        destaque: true,
        itens: [
          "Monitoramento e correção de falhas das automações e dos agentes",
          "Atualização de APIs e integrações com as ferramentas do cliente",
          "Melhoria contínua com base no feedback direto do time",
          "Otimização de velocidade de resposta e do banco de dados",
          "Atualização da base de conhecimento com processos e políticas novas",
          "Pequenas melhorias e novas funcionalidades dentro do escopo já acordado",
          "Canal direto para dúvidas e demandas, com relatório mensal de uso e desempenho",
        ],
        observacao:
          "Cobre manutenção e evolução dentro do escopo entregue. Funcionalidades fora do escopo original são orçadas à parte.",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "Pronto para fazer a operação",
    tituloDestaque: "evoluir com inteligência?",
    descricao:
      "Proposta com validade de 15 dias. Qualquer ponto do escopo pode ser ajustado antes da assinatura, é só chamar que a gente alinha.",
    botaoLabel: "Falar com um especialista",
    botaoLink:
      "https://wa.me/55[DDD][NUMERO]?text=Ol%C3%A1!%20Quero%20falar%20sobre%20a%20proposta.",
    pdfLabel: "Baixar o escopo do projeto em PDF",
    pdfLink: "/pdfs/escopo-[CLIENTE].pdf",
  },

  footer: {
    logoSrc: logo,
    logoAlt: "SHOKS",
    siteUrl: "https://shoks-solutions.com.br",
    siteLabel: "shoks-solutions.com.br",
    nota: "SHOKS · Inteligência aplicada a operações reais.",
  },

  documento: {
    eyebrow: "ESCOPO E ENTREGÁVEIS",
    titulo: "[NOME DO PROJETO]",
    subtitulo: "[CLIENTE] · o que o projeto entrega",
    intro:
      "Este documento lista, de forma direta, o que está incluso no projeto. Valores e condições de pagamento estão na proposta: [RESUMO DO INVESTIMENTO E PRAZO].",
    planos: [
      {
        nome: "[NOME DO PLANO OU ENTREGA]",
        prazo: "Entrega em até [PRAZO]",
        resumo: "[UMA LINHA SOBRE O QUE ESSE BLOCO ENTREGA]",
        grupos: [
          { titulo: "[GRUPO 1]", itens: ["[ITEM]", "[ITEM]", "[ITEM]"] },
          { titulo: "[GRUPO 2]", itens: ["[ITEM]", "[ITEM]"] },
        ],
      },
    ],
    blocos: [
      { titulo: "Fora do escopo", itens: ["[ITEM]"] },
      { titulo: "Custos de terceiros (por conta do cliente)", itens: ["[ITEM]"] },
      { titulo: "O que precisamos do [CLIENTE]", itens: ["[ITEM]"] },
    ],
    rodape: "Documento preparado pela SHOKS para [CLIENTE] · [DATA]",
    arquivo: "escopo-[CLIENTE]",
  },
};
