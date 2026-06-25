import { navMenuWithIconType } from "../types/nav-menu-with-icon-types";

import { IconMic } from "../(website)/components/header/mobile-menu/icons/icon-mic";
import { IconFace } from "../(website)/components/header/mobile-menu/icons/icon-face";
import { IconLock } from "../(website)/components/header/mobile-menu/icons/icon-lock";
import { IconSearch } from "../(website)/components/header/mobile-menu/icons/icon-search";
import { IconCircles } from "../(website)/components/header/mobile-menu/icons/icon-circles";
import { IconDocLines } from "../(website)/components/header/mobile-menu/icons/icon-doc-lines";
import { IconPlusFace } from "../(website)/components/header/mobile-menu/icons/icon-plus-face";
import { IconDoubleDoc } from "../(website)/components/header/mobile-menu/icons/icon-double-doc";
import { IconConnection } from "../(website)/components/header/mobile-menu/icons/icon-connection";

export const projectsMenuItems: navMenuWithIconType = [
  {
    color: "141, 104, 58",
    icon: IconFace,
    title: "IA do Notion",
    desc: "Ferramenta de IA para trabalho",
    isNew: false,
  },
  {
    color: "255, 138, 51",
    icon: IconPlusFace,
    title: "Agentes",
    desc: "Ferramenta de IA para trabalho",
    isNew: true,
  },
  {
    color: "246, 73, 50",
    icon: IconMic,
    title: "Anotações IA",
    desc: "Redigido impecavelmente por IA",
    isNew: false,
  },
  {
    color: "152, 73, 232",
    icon: IconSearch,
    title: "Busca Enterprise",
    desc: "Encontre respostas instantaneamente",
    isNew: false,
  },
  {
    color: "0, 117, 222",
    icon: IconDoubleDoc,
    title: "Base de conhecimento",
    desc: "Centralize seu conhecimento",
    isNew: false,
  },
  {
    color: "42, 157, 153",
    icon: IconDocLines,
    title: "Documentos",
    desc: "Simples e poderoso",
    isNew: false,
  },
  {
    color: "255, 177, 16",
    icon: IconCircles,
    title: "Projetos",
    desc: "Gerencie qualquer projeto",
    isNew: false,
  },
  {
    color: "120, 115, 111",
    icon: IconConnection,
    title: "Integrações",
    desc: "Conecte os seus apps",
    isNew: false,
  },
  {
    color: "120, 115, 111",
    icon: IconLock,
    title: "Segurança",
    desc: "Seguro e escalável",
    isNew: false,
  },
];
