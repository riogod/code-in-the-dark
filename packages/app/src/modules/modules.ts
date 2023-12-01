import { Module } from "./interface";
import CoreConfig from "./core/config/module_config";
import CodeInTheDarkConfig from "./code_in_the_dark/config/module_config";

export const app_modules: Module[] = [
  {
    name: "core",
    description:
      "Core module - Содержит основной макет приложения и отвечает за базовые функции",
    path: "core",
    config: CoreConfig,
  },
  {
    name: "code_in_the_dark",
    path: "code_in_the_dark",
    description: "code_in_the_dark",
    config: CodeInTheDarkConfig,
  },
];
