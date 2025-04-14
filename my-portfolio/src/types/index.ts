import { JSX } from "react";

type SkillItem = {
    name: string;
    icon: JSX.Element;
  };
  
  type SkillCategory = {
    title: string;
    items: SkillItem[];
  };
  
  type SkillCardProps = {
    skill: SkillCategory;
  };
    
  type Project = {
    title: string;
    description: string;
    path: string;
    thumbnail?: string; // optional image preview
};


export type { SkillItem, SkillCategory, SkillCardProps, Project };