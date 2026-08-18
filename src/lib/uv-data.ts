import {
  Sparkles,
  Download,
  RefreshCw,
  MonitorSmartphone,
  Gauge,
  Headphones,
  Tv,
  Package,
  Flame,
  MonitorPlay,
  Laptop,
  Smartphone,
  Tablet,
  Apple,
  Monitor,
  ShieldCheck,
  Rocket,
  Clock,
  Users,
  Heart,
  Star,
} from "lucide-react";

export const WHATSAPP_NUMBER = "5585991173080";
export const WHATSAPP_DISPLAY = "(85) 99117-3080";
export const INSTAGRAM_URL = "https://instagram.com/ultraview";
export const CONTACT_EMAIL = "contato@ultraview.app";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const PENDING_KEY = "ultraview_pending_payment";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Compatibilidade", href: "#compatibilidade" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Suporte", href: "#suporte" },
];

export const trustItems = [
  { icon: Star, label: "Avaliação 5 estrelas", value: "★★★★★" },
  { icon: Users, label: "Seguidores", value: "+50 Mil" },
  { icon: Heart, label: "Clientes ativos", value: "Milhares" },
  { icon: Headphones, label: "Atendimento", value: "Humanizado" },
  { icon: Clock, label: "Suporte", value: "Diário" },
  { icon: MonitorSmartphone, label: "Compatibilidade", value: "Ampla" },
];

export const benefits = [
  { icon: Sparkles, title: "Interface moderna", desc: "Navegação fluida, organizada por categorias e feita para você encontrar o que quer em segundos." },
  { icon: Download, title: "Instalação simplificada", desc: "Poucos toques e está pronto. Enviamos o passo a passo para o seu aparelho específico." },
  { icon: RefreshCw, title: "Atualizações constantes", desc: "Catálogo e aplicativo atualizados continuamente, sem que você precise fazer nada." },
  { icon: MonitorSmartphone, title: "Vários dispositivos", desc: "Celular, TV, notebook, tablet e TV Box — a mesma experiência em qualquer tela." },
  { icon: Gauge, title: "Excelente qualidade", desc: "Imagem estável e nítida, com estrutura preparada para reprodução sem travamentos." },
  { icon: Headphones, title: "Suporte rápido", desc: "Atendimento humano no WhatsApp, sem robôs e sem espera interminável." },
];

export const steps = [
  { n: "01", title: "Escolha seu plano", desc: "Selecione o período que mais combina com você e finalize com pagamento seguro." },
  { n: "02", title: "Receba acesso", desc: "Seus dados de acesso chegam pelo WhatsApp logo após a confirmação." },
  { n: "03", title: "Instale rapidamente", desc: "Enviamos o tutorial exato do seu aparelho. Leva poucos minutos." },
  { n: "04", title: "Aproveite a experiência", desc: "Tudo liberado, em qualquer tela, com suporte sempre disponível." },
];

export const compatibility = [
  { name: "Android", desc: "Celulares e tablets Android", icon: Smartphone },
  { name: "iPhone", desc: "iPhone e iPad com iOS", icon: Apple },
  { name: "Smart TV", desc: "Samsung, LG e Android TV", icon: Tv },
  { name: "TV Box", desc: "Qualquer TV Box Android", icon: Package },
  { name: "Computador", desc: "Windows, macOS e Linux", icon: Monitor },
  { name: "Tablet", desc: "Tablets Android e iPad", icon: Tablet },
];

export const differentials = [
  { icon: Headphones, title: "Atendimento dedicado", desc: "Uma pessoa real acompanhando você do primeiro contato à instalação." },
  { icon: RefreshCw, title: "Atualizações frequentes", desc: "Novidades entram no catálogo continuamente, sem custo extra." },
  { icon: MonitorSmartphone, title: "Compatibilidade ampla", desc: "Funciona em aparelhos atuais e também em modelos mais antigos." },
  { icon: Rocket, title: "Ativação rápida", desc: "Acesso liberado em poucos minutos após a confirmação do pagamento." },
  { icon: Sparkles, title: "Interface moderna", desc: "Layout limpo e intuitivo, pensado para qualquer nível de familiaridade." },
  { icon: ShieldCheck, title: "Suporte eficiente", desc: "Resolvemos dúvidas técnicas de forma objetiva, no seu ritmo." },
];

export const faq = [
  { q: "Como funciona?", a: "Você escolhe um plano, finaliza o pagamento e recebe seus dados de acesso pelo WhatsApp. Depois é só instalar o aplicativo no aparelho de sua preferência e começar a assistir." },
  { q: "Como instalar?", a: "Enviamos um tutorial exclusivo para o seu aparelho, com passo a passo simples. Se preferir, nosso atendimento acompanha a instalação com você em tempo real." },
  { q: "Em quais dispositivos funciona?", a: "Android, iPhone, iPad, Smart TV (Samsung, LG e Android TV), TV Box, Fire Stick, Mi Stick, notebooks e computadores. Modelos atuais e antigos." },
  { q: "Precisa de internet?", a: "Sim. Todo o conteúdo é transmitido pela internet. Recomendamos uma conexão estável de pelo menos 10 Mbps para uma experiência confortável." },
  { q: "Como recebo acesso?", a: "Assim que confirmamos o pagamento, enviamos suas credenciais diretamente pelo WhatsApp. Normalmente em poucos minutos." },
  { q: "Existe suporte?", a: "Sim, suporte humanizado diário pelo WhatsApp — para instalação, dúvidas, troca de aparelho e qualquer ajuste que precisar." },
];

export const testimonials = [
  { name: "Rafael Almeida", city: "Fortaleza, CE", text: "Instalei na Smart TV em menos de cinco minutos com o suporte no WhatsApp. Nunca fui tão bem atendido." },
  { name: "Juliana Freitas", city: "Recife, PE", text: "A qualidade da imagem me surpreendeu e a interface é muito fácil de usar. Já indiquei para a família toda." },
  { name: "Marcos Vinícius", city: "São Paulo, SP", text: "Uso no celular e no notebook. Funciona redondo nos dois e o acesso foi liberado no mesmo dia." },
  { name: "Patrícia Gomes", city: "Belo Horizonte, MG", text: "O que mais gostei foi o atendimento. Respondem rápido, com paciência e explicam tudo direitinho." },
  { name: "Anderson Lima", city: "Curitiba, PR", text: "Assino há meses e nunca tive problema. Vale muito o custo-benefício do plano anual." },
  { name: "Camila Rocha", city: "Salvador, BA", text: "Minha TV é antiga e mesmo assim funcionou perfeitamente. Me ajudaram a configurar do zero." },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  badge: string | null;
  highlight: boolean;
  features: string[];
  cta: string;
  /** Valor em reais para gerar o PIX. Ausente = teste grátis (WhatsApp). */
  amount?: number;
};

export const plans: Plan[] = [
  { name: "Teste Grátis", price: "Grátis", period: "2 horas", badge: "Teste agora", highlight: false, features: ["Acesso completo por 2 horas", "Conheça todo o catálogo", "Canais ao vivo inclusos", "Sem cartão de crédito"], cta: "Quero Testar Grátis" },
  { name: "Rápido", price: "R$ 5", period: "/4 horas", badge: "Acesso express", highlight: false, features: ["Acesso liberado por 4 horas", "Catálogo completo", "Ideal para um jogo ou filme", "Suporte humanizado"], cta: "Assinar Agora", amount: 5 },
  { name: "Popular", price: "R$ 8,99", period: "/24 horas", badge: "Mais procurado", highlight: false, features: ["Acesso liberado por 24 horas", "Catálogo completo", "Filmes, séries, animes e doramas", "Suporte humanizado"], cta: "Assinar Agora", amount: 8.99 },
  { name: "Mensal", price: "R$ 29,99", period: "/mês", badge: "🔥 Melhor oferta", highlight: true, features: ["Mensalidade completa", "+ Canais ao vivo", "+ Canais adultos", "Suporte VIP prioritário"], cta: "Assinar Agora", amount: 29.99 },
];

export const rivalServices = [
  { initials: "N", name: "Netflix", price: "R$ 44,90", value: 44.9 },
  { initials: "D+", name: "Disney+", price: "R$ 33,90", value: 33.9 },
  { initials: "▶", name: "Amazon", price: "R$ 19,90", value: 19.9 },
  { initials: "M", name: "HBO Max", price: "R$ 34,90", value: 34.9 },
];

export const rivalTotal = "R$ 133,60";
export const ourMonthly = "R$ 29,99";
export const savingsLabel = "R$ 100,00";


export const trialDevices = [
  { name: "Smart TV (modelo atual)", icon: Tv },
  { name: "Smart TV antiga (até 2018)", icon: Tv },
  { name: "TV Box Android", icon: Package },
  { name: "Amazon Fire Stick", icon: Flame },
  { name: "Xiaomi Mi Stick / Mi Box", icon: MonitorPlay },
  { name: "Notebook / PC", icon: Laptop },
  { name: "Celular Android", icon: Smartphone },
  { name: "iPhone / iPad", icon: Apple },
  { name: "Outro / não sei", icon: MonitorSmartphone },
];
