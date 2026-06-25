import { navMenuWithIconType } from "../types/nav-menu-with-icon-types";

import { IconMic } from "../(website)/components/header/mobile-menu/icons/icon-mic";
import { IconFace } from "../(website)/components/header/mobile-menu/icons/icon-face";
import { IconSearch } from "../(website)/components/header/mobile-menu/icons/icon-search";
import { IconPlusFace } from "../(website)/components/header/mobile-menu/icons/icon-plus-face";

export const aiMenuItems: navMenuWithIconType = [
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
];
