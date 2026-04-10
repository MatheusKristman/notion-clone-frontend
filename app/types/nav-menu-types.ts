import React from "react";

export type items = {
    color: string;
    icon: React.ComponentType<{ color: string }>;
    title: string;
    desc: string;
    isNew: boolean;
}[];
