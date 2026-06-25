import React from "react";

export type navMenuWithIconType = {
  color: string;
  icon: React.ComponentType<{ color: string }>;
  title: string;
  desc: string;
  isNew: boolean;
}[];
